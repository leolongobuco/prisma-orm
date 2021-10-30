import { Router } from "express";
import TeamController from "../controllers/TeamController";
import requireAuth from "../middlewares/requireAuth";

const router = Router();

router.post("/", requireAuth, TeamController.store);
router.get("/", TeamController.index);
router.get("/:teamId", TeamController.show);
router.put("/:teamId", requireAuth, TeamController.update);
router.delete("/:teamId", requireAuth, TeamController.delete);

export default router;
