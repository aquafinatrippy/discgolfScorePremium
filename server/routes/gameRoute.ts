import express from "express";
import {
  createGame,
  deleteGame,
  getGameData,
} from "../controllers/gameController";
import { authCheck } from "../middleware/authMiddleware";

export const gameRoutes = express.Router();

gameRoutes.route("/").get(authCheck, getGameData);
gameRoutes.route("/create").post(authCheck, createGame);
gameRoutes.route("/:id").delete(authCheck, deleteGame)