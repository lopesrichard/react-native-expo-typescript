import Storage from '~/services/storage';

import { createSlice } from '@reduxjs/toolkit';

type User = {
  name: string;
};

type ActionPushProps = {
  payload: User;
};

type ActionRemoveProps = {
  payload: User;
};

const { actions, reducer } = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    login: (state, action: ActionPushProps) => {
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
