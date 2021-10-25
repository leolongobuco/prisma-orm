import { Router } from "express";
import TeamController from "../controllers/TeamController";

const router = Router();

router.post("/", TeamController.store);
router.get("/", TeamController.index);
router.get("/:teamId", TeamController.show);
router.put("/:teamId", TeamController.update);
router.delete("/:teamId", TeamController.delete);

export default router;
