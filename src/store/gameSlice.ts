import { createSlice } from '@reduxjs/toolkit';
import { SCREENS } from '../types/screens';

interface IGameState {
  currentScreen: SCREENS;
  gameResult: number;
  alienCount: number;
  isSoundOn: boolean;
  arrows: number;
}

const gameState: IGameState = {
  currentScreen: SCREENS.THE_START,
  gameResult: 0,
  alienCount: 0,
  isSoundOn: false,
  arrows: 5,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState: gameState,
  reducers: {
    setCurrentScreen: (state, action) => {
      state.currentScreen = action.payload;
    },
    setGameResult: (state, action) => {
      state.gameResult = action.payload;
    },
    setAlienCount: (state, action) => {
      state.alienCount = action.payload;
    },
    setIsSoundOn: (state) => {
      state.isSoundOn = !state.isSoundOn;
    },

    decreaseArrows: (state) => {
      state.arrows = state.arrows - 1;
    },

    updateArrows: (state) => {
      state.arrows = 5;
    },
  },
});

export const {
  setCurrentScreen,
  setGameResult,
  setAlienCount,
  setIsSoundOn,
  decreaseArrows,
  updateArrows,
} = gameSlice.actions;
