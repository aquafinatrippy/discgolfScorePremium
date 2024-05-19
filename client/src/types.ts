export interface Player {
  name: string;
  score: number;
}

export interface Game {
  name: string;
  players: Player[];
}
