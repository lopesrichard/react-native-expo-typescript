import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Login from '~/navigators/login';
import TabMenu from '~/navigators/tabs';
import { useSelector } from 'react-redux';
import { RootState } from '~/slices';

export type RootNavigatorScreenList = {
  Home: undefined;
  TabMenu: undefined;
  Account: undefined;
  Search: undefined;
  Welcome: undefined;
  Register: undefined;
  Login: undefined;
};

export const Router = () => {
  const user = useSelector((state: RootState) => state.user);
  return <NavigationContainer>{user ? <TabMenu /> : <Login />}</NavigationContainer>;
};
