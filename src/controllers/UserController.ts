import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import prisma from "../config/prismaClient";

class User {
  async store(request: Request, response: Response) {
    const { email, password } = request.body;

    try {
      const passwordHash = await bcrypt.hash(password, 8);
      const user = await prisma.user.create({
        data: {
          email,
          password: passwordHash,
        },
      });

      const { createdAt } = user;

      return response.status(201).json({ email, createdAt });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export default new User();
