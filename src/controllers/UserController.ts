import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import prisma from "../config/prismaClient";

class User {
  async store(request: Request, response: Response) {
    const { email, password } = request.body;

    try {
      const passwordHash = await bcrypt.hash(password, 8);

      const user = await prisma.users.create({
        data: {
          email,
          password: passwordHash,
        },
        select: {
          email: true,
          createdAt: true,
        },
      });
      return response.status(201).json(user);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  async index(request: Request, response: Response) {
    try {
      const users = await prisma.users.findMany({
        select: {
          email: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return response.status(200).json(users);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }

  async show(request: Request, response: Response) {
    const { userId } = request.params;

    try {
      const user = await prisma.users.findUnique({
        where: {
          id: Number(userId),
        },
        select: {
          email: true,
        },
      });
      return response.status(200).json(user);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }

  async update(request: Request, response: Response) {
    const { userId } = request.params;
    const { password } = request.body;

    try {
      const newDataUser = await prisma.users.update({
        where: {
          id: Number(userId),
        },
        data: {
          password,
        },
        select: {
          id: true,
          email: true,
          createdAt: true,
          updatedAt: true,
        },
      });
      return response.status(200).json(newDataUser);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  async delete(request: Request, response: Response) {
    const { userId } = request.params;

    try {
      await prisma.users.delete({
        where: {
          id: Number(userId),
        },
      });
      return response.status(204).json(null);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export default new User();
