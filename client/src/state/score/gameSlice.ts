import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Game, Player } from '../../types';

export interface GameState {
  game: Game;
}

const initialState: GameState = {
  game: {
    name: '',
    players: [],
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
  },
});

export const { addPlayer, increaseScore, decreaseScore } = gameSlice.actions;

export default gameSlice.reducer;
