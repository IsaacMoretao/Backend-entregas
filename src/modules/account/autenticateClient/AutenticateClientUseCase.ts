import { compare } from "bcrypt";
import { prisma } from "../../../database/prismaClient";
import { sign } from "jsonwebtoken";

interface IautenticateClient {
  username: string;
  password: string;
}

export class AutenticateClientUseCase {
  async execute({ username, password}: IautenticateClient) {
    const client = await prisma.clients.findFirst({
      where: {
        username
      }
    })

    if(!client) {
      throw new Error("Username or password invalid!")
    }

    const passwordMatch = await compare(password, client.password)

    if(!passwordMatch) {
      throw new Error("USername or password invalid!")
    }

    const token = sign({username}, "uPasXpclP9APcoocVvZM2g", {
      subject: client.id,
      expiresIn: "1d"
    });

    return token;
  }
}