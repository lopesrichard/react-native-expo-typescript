import Storage from '~/services/storage';

import { createSlice } from '@reduxjs/toolkit';

type Card = {
  number: string;
};

type ActionPushProps = {
  payload: Card[];
};

type ActionAddProps = {
  payload: Card;
};

type ActionRemoveProps = {
  payload: Card;
};

const { actions, reducer } = createSlice({
  name: 'cards',
  initialState: [],
  reducers: {
    init: (state, action: ActionPushProps) => {
      state.push(...action.payload);
    },
    addCard: (state, action: ActionAddProps) => {
      state.push(action.payload);
      Storage.save('@cards', state);
    },
    removeCard: (state, action: ActionRemoveProps) => {
      const index = state.findIndex(card => card.number === action.payload.number);
      state.splice(index, 1);
      Storage.save('@cards', state);
    },
  },
});

export const { addCard, removeCard } = actions;
export default reducer;

// (async () => {
//   const cards = await Storage.load('@cards');
//   cards && store.dispatch(actions.init(cards));
// })();
