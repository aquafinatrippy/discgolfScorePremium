import { Schema, model } from 'mongoose';
import { Player } from '../types/player';

export interface IGame {
  title: string;
  players: Player[];
  scoreBoard: {
    basket: number;
    scoreTable: Player[];
  }[];
}

const gameSchema = new Schema<IGame>(
  {
    title: {
      type: String,
      required: [true, 'Title missing'],
    },
    players: [
      {
        name: { type: String },
        score: { type: Number },
      },
    ],
    scoreBoard: [
      {
        basket: { type: Number },
        scoreTable: [
          {
            name: { type: String },
            score: { type: Number },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Game = model<IGame>('Game', gameSchema);

export { Game };
