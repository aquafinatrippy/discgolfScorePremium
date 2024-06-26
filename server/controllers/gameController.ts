import { Request, Response } from "express";
import { User } from "../models/userModel";
import { Game } from "../models/gameSchema";

export const createGame = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      res.status(401).json({ message: "User not authenticated at creating" });
    }
    const { type, title, total_amount } = req.body;
    if (!title || !total_amount) {
      res.status(400).json({ message: "Please add required fields" });
    }
    const finance = await Game.create({
      title,
      description: req.body.description,
      created_by: req.user.id,
      total_amount,
      type,
    });
    res.status(201).json(finance);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Create finance error" });
  }
};

export const getGameData = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      res.status(401).json({ message: "User not authenticated at creating" });
    }
    const resData = await Game.find({ created_by: user?._id });
    res.status(200).json(resData);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Create finance error" });
  }
};

export const deleteGame = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      res.status(401).json({ message: "User not authenticated at creating" });
    }
    await Game.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: "finance has been removed" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Delete finance error" });
  }
};

export const updateGame = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      res.status(401).json({ message: "User not authenticated at creating" });
    }
    const { title, description, total_amount, type } = req.body;
    const updatedFincance = await Game.findByIdAndUpdate({
      title,
      description,
      total_amount,
      type,
    });
    res.status(200).json(updatedFincance);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Update finance error" });
  }
};
