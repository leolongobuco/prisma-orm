import { Request, Response } from "express";

class TeamController {
  store(request: Request, response: Response) {
    response.json("primeiro controller");
  }

  index(request: Request, response: Response) {}

  show(request: Request, response: Response) {}

  update(request: Request, response: Response) {}

  delete(request: Request, response: Response) {}
}

export default new TeamController();
