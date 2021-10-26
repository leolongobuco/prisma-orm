import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();

router.post("/", UserController.store);
router.get("/", UserController.index);
router.get("/:userId", UserController.show);
router.put("/:userId", UserController.update);
router.delete("/:userId", UserController.delete);

export default router;
