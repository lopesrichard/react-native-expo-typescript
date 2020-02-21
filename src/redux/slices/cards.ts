import store from '~/redux/store';

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

export const { actions, reducer } = createSlice({
  name: 'cards',
  initialState: [],
  reducers: {
    push: (state, action: ActionPushProps) => {
      const cards = action.payload;
      Storage.save('@cards', cards);
      return cards;
    },
    add: (state, action: ActionAddProps) => {
      const cards = [...state, action.payload];
      Storage.save('@cards', cards);
      return cards;
    },
    remove: (state, action: ActionRemoveProps) => {
      const cards = state.filter(card => card.number !== action.payload.number);
      Storage.save('@cards', cards);
      return cards;
    },
  },
});

(async () => {
  const cards = await Storage.load('@cards');
  cards && store.dispatch(actions.push(cards));
})();
