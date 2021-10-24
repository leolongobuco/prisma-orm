import { Router } from "express";
import LeagueController from "../controllers/LeagueController";

const router = Router();

router.post("/createLeague", LeagueController.store);
export default router;
