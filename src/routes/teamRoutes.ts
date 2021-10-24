import { Router } from "express";
import TeamController from "../controllers/TeamController";

const router = Router();

router.post("/", TeamController.store);
router.get("/", TeamController.index);

export default router;
