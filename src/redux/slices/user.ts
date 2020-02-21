import store from '~/redux/store';

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

export const { actions, reducer } = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    login: (state, action: ActionPushProps) => {
      const user = action.payload;
      Storage.save('@user', user);
      return user;
    },
    logout: (state, action: ActionRemoveProps) => {
      Storage.remove('@user');
      return null;
    },
  },
});

(async () => {
  const user = await Storage.load('@user');
  user && store.dispatch(actions.login(user));
})();
