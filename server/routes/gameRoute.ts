import express from "express";
import {
  createFinance,
  getFinanceData,
} from "../controllers/gameController";
import { authCheck } from "../middleware/authMiddleware";

export const gameRoutes = express.Router();

gameRoutes.route("/").get(authCheck, getFinanceData);
gameRoutes.route("/create").post(authCheck, createFinance);
gameRoutes.route("/:id").delete(authCheck, )