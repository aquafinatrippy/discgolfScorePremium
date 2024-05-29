import { Schema, model } from "mongoose";

export interface IGame {
  title: string;
  players: {
    name: string;
    score: string
  }[],
  scoreBoard: {
    basket: number,
    
  }[]
}

const gameSchema = new Schema<IGame>(
  {
    title: {
      type: String,
      required: [true, "Title missing"],
    },
    players: [{
      name: { type: String },
      score: { type: String }
    }],

  },
  {
    timestamps: true,
  }
);

const Game = model<IGame>("Game", gameSchema);

export { Game };
