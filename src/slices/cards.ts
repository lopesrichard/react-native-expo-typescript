import * as Storage from '~/services/storage';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Card = {
  number: string;
};

const INITIAL_STATE: Card[] = [];

const { actions, reducer } = createSlice({
  name: 'cards',
  initialState: INITIAL_STATE,
  reducers: {
    init: (state, action: PayloadAction<Card[]>) => {
      state.push(...action.payload);
    },
    addCard: (state, action: PayloadAction<Card>) => {
      state.push(action.payload);
      Storage.save('@cards', state);
    },
    removeCard: (state, action: PayloadAction<Card>) => {
      const index = state.findIndex(card => card.number === action.payload.number);
      state.splice(index, 1);
      Storage.save('@cards', state);
    },
  },
});

export const { addCard, removeCard } = actions;
export default reducer;
