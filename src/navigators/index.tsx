import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '~/screens/login';
import TabMenu from '~/navigators/tabs';

const Stack = createStackNavigator();

const tabs = [
  { label: 'Início', icon: 'home' },
  { label: 'Busca', icon: 'search' },
  { label: 'Minha Carteira', icon: 'wallet' },
  { label: 'Conta', icon: 'user-alt' }
];

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={({ navigation }) => ({ header: () => null })}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='TabMenu' component={TabMenu} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
