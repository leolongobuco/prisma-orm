import { Request, Response } from "express";
import prisma from "../config/prismaClient";

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

  async show(request: Request, response: Response) {
    const { teamId } = request.params;

    try {
      const team = await prisma.teams.findUnique({
        where: {
          id: Number(teamId),
        },
      });
      return response.status(200).json(team);
    } catch (error) {
      return response.status(404).json({ errors: error.message });
    }
  }

  async update(request: Request, response: Response) {
    const { teamId } = request.params;
    const { name, state, city, foundation, stadium, colorTeam } = request.body;

    if (!teamId) {
      return response.status(404).json({ error: ["Missing Id"] });
    }

    try {
      const newDataTeam = await prisma.teams.update({
        where: {
          id: Number(teamId),
        },
        data: {
          name,
          state,
          city,
          foundation,
          stadium,
          colorTeam,
        },
      });
      return response.status(200).json(newDataTeam);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }

  async delete(request: Request, response: Response) {
    const { teamId } = request.params;

    if (!teamId) {
      return response.status(404).json({ error: ["Missing Id"] });
    }

    try {
      await prisma.teams.delete({
        where: {
          id: Number(teamId),
        },
      });
      return response.status(204).json(null);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export default new TeamController();
