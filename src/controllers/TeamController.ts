import { Request, Response } from "express";
import prisma from "../config/prismaClient";

// TODO: SHOW UPDATE DELETE
class TeamController {
  async store(request: Request, response: Response) {
    const { name, state, city, foundation, stadium, colorTeam } = request.body;
    try {
      const team = await prisma.teams.create({
        data: {
          name,
          state,
          city,
          foundation,
          stadium,
          colorTeam,
        },
      });
      return response.status(201).json(team);
    } catch (error) {
      return response.status(400).json({
        errors: error.message,
      });
    }
  }

  async index(request: Request, response: Response) {
    try {
      const teams = await prisma.teams.findMany();
      return response.status(200).json(teams);
    } catch (error) {
      return response.status(404).json({ errors: error.message });
    }
  }

  // show(request: Request, response: Response) {

  // update(request: Request, response: Response) {}

  // delete(request: Request, response: Response) {}
}

export default new TeamController();
