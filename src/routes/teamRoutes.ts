import { Router } from "express";
import TeamController from "../controllers/TeamController";

const router = Router();

router.get("/", TeamController.store);
export default router;
