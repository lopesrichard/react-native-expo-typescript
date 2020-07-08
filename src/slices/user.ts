import * as Storage from '~/services/storage';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  name: string;
};

const INITIAL_STATE: User | null = null;

const { actions, reducer } = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      Storage.save('@user', action.payload);
      return action.payload;
    },
    logout: () => {
      Storage.remove('@user');
      return null;
    },
  },
});

export const { login, logout } = actions;
export default reducer;

// (async () => {
//   const user = await Storage.load('@user');
//   user && store.dispatch(actions.login(user));
// })();
