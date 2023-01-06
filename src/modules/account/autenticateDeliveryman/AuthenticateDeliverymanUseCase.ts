import { compare } from "bcrypt";
import { prisma } from "../../../database/prismaClient";
import { sign } from "jsonwebtoken";

interface IautenticateDeliverman {
  username: string;
  password: string;
}

export class AutenticateDelivermanUseCase {
  async execute({ username, password}: IautenticateDeliverman) {
    const deliverman = await prisma.deliveryman.findFirst({
      where: {
        username
      }
    })

    if(!deliverman) {
      throw new Error("Username or password invalid!")
    }

    const passwordMatch = await compare(password, deliverman.password)

    if(!passwordMatch) {
      throw new Error("USername or password invalid!")
    }

    const token = sign({username}, "uPasXpclP9APcoocVvZM2h", {
      subject: deliverman.id,
      expiresIn: "1d"
    });

    return token;
  }
}