import { Router } from "express";
import TeamController from "../controllers/TeamController";
import requireAuth from "../middlewares/requireAuth";

const router = Router();

router.post("/", requireAuth, TeamController.store);
router.get("/", TeamController.index);
router.get("/:teamId", TeamController.show);
<<<<<<< HEAD
router.put("/:teamId", TeamController.update);
router.delete("/:teamId", TeamController.delete);
=======
router.put("/:teamId", requireAuth, TeamController.update);
router.delete("/:teamId", requireAuth, TeamController.delete);
>>>>>>> develop

export default router;
