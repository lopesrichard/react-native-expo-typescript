import React from 'react';

import { connect } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import Login from '~/navigators/login';
import TabMenu from '~/navigators/tabs';

const Router = ({ user }) => {
  return <NavigationContainer>{user ? <TabMenu /> : <Login />}</NavigationContainer>;
};

const mapState = state => ({
  user: state.user,
});

export default connect(mapState)(Router);
