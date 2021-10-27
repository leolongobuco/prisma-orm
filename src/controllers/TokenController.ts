import { Request, Response } from "express";
import prisma from "../config/prismaClient";
import service from "../services/TokenService";

class TokenController {
  async store(request: Request, response: Response) {
    try {
      const { email = "", password = "" } = request.body;

      if (!email || !password) {
        return response.status(401).json({ errors: ["Invalid Credentials"] });
      }

      const user = await prisma.users.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        return response.status(404).json({ errors: ["User doesn't exist"] });
      }

      const { id } = user;
      const passwordHash = user.password;

      const validPassword = await service.passwordIsValid(
        password,
        passwordHash
      );

      if (!validPassword) {
        return response.status(401).json({ errors: ["Invalid password"] });
      }

      const token = await service.getToken(id, email);

      return response.json({ token });
    } catch (error) {
      return response.json(400).json({ error: error.message });
    }
  }
}

export default new TokenController();
