import { createSlice } from '@reduxjs/toolkit';

interface ScoreState {
  value: number;
}

const initialState: ScoreState = {
  value: 0,
};

const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {},
});

export default scoreSlice.reducer;
