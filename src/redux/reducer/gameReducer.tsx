import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface gameState {
  state : string;
  mTimer : number;
  sTimer : number;
  msTimer: number;
  correctAnswers: number;
  incorrectAnswers: number;
  isCorrect: boolean;
}

const MAX_AMOUNT = 10;

const initialState: gameState = {
  state: "home",
  mTimer: 0,
  sTimer: 0,
  msTimer: 0,
  correctAnswers: 0,
  incorrectAnswers: 0,
  isCorrect: true,
}
export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers:{
    setState: (state, action:PayloadAction<string>) => {
      state.state = action.payload;
    },
    incrementCorrectAnswers: (state) => {
      state.correctAnswers++;
    },
    incrementIncorrectAnswers: (state) => {
      state.incorrectAnswers++;
    },
    setTimer: (state, action:PayloadAction<[number,number,number]>) => {
      state.mTimer = action.payload[0];
      state.sTimer = action.payload[1];
      state.msTimer = action.payload[2];
    },
    setIsCorrect: (state, action:PayloadAction<boolean>) => {
      state.isCorrect = action.payload;
    },
    initialize: (state) => {
      state.correctAnswers = 0;
      state.incorrectAnswers = 0;
      state.isCorrect = true;
    }
  },
})

export const {setState,incrementCorrectAnswers,incrementIncorrectAnswers,setTimer,setIsCorrect,initialize} = gameSlice.actions;
export default gameSlice.reducer;