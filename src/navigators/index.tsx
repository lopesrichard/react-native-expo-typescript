import React from 'react';

import connect from '~/redux/connect';

import { NavigationContainer } from '@react-navigation/native';

import Login from '~/navigators/login';
import TabMenu from '~/navigators/tabs';

export default connect(({ user }) => {
  return <NavigationContainer>{user ? <TabMenu /> : <Login />}</NavigationContainer>;
});
