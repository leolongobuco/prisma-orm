import { Router } from "express";
import UserController from "../controllers/UserController";
import requireAuth from "../middlewares/requireAuth";

const router = Router();

router.post("/", UserController.store);
router.get("/", UserController.index);
router.get("/:userId", UserController.show);
router.put("/:userId", requireAuth, UserController.update);
router.delete("/:userId", requireAuth, UserController.delete);

export default router;
