import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import prisma from "../config/prismaClient";

interface IPayload {
  email: string;
}
export default async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({ errors: ["Login required"] });
  }

  const [, token] = authorization.split(" ");

  try {
    const data = jwt.verify(token, process.env.SECRET) as IPayload;

    const { email } = data;

    const user = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return response.status(401).json({ errors: ["Invalid user"] });
    }

    request.email = email;
    return next();
  } catch (error) {
    return response.status(401).json({ errors: ["Expired or invalid token"] });
  }
};
