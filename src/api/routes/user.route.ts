import { Router } from "express";
import GetAllUser from "../controller/user.controller";

const router = Router();

router.get("/users", GetAllUser);

export default router;
