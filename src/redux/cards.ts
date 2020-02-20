import store from '~/redux/store';

import Storage from '~/services/storage';

import { createSlice } from '@reduxjs/toolkit';

export const { actions, reducer } = createSlice({
  name: 'cards',
  initialState: [],
  reducers: {
    push: (state, action) => {
      const cards = action.payload;
      Storage.save('@cards', cards);
      return cards;
    },
    add: (state, action) => {
      const cards = [...state, action.payload];
      Storage.save('@cards', cards);
      return cards;
    },
    remove: (state, action) => {
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
