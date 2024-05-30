import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Game, Player } from '../../types';

interface IGame {
  title: string;
  players: Player[];
  scoreBoard: {
    basket: number;
    scoreTable: Player[];
  }[];
}
export interface GameState {
  game: IGame;
}

const initialState: GameState = {
  game: {
    title: '',
    players: [],
    scoreBoard: [{ basket: 1, scoreTable: [] }],
  },
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addPlayer: (state, action: PayloadAction<Player>) => {
      state.game.players.push(action.payload);
    },
    increaseScore: (state, action: PayloadAction<number>) => {
      state.game.players[action.payload].score =
        state.game.players[action.payload].score + 1;
    },
    decreaseScore: (state, action: PayloadAction<number>) => {
      state.game.players[action.payload].score =
        state.game.players[action.payload].score - 1;
    },
    updateBasket: (
      state,
      action: PayloadAction<{ type: 'add' | 'remove' }>
    ) => {
      if (action.payload.type === 'add') state.game.scoreBoard[0].basket += 1;
      else state.game.scoreBoard[0].basket -= 1;
    },
  },
});

export const { addPlayer, increaseScore, decreaseScore, updateBasket } =
  gameSlice.actions;

export default gameSlice.reducer;
