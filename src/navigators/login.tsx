import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '~/screens/welcome';
import Register from '~/screens/register';
import Login from '~/screens/login';

import BackButton from '~/components/navigators/stack/back_button';
import Contants from '~/navigators/contants';

const Stack = createStackNavigator();

const options = ({ navigation }) => ({
  headerTitle: () => null,
  headerStyle: Contants.stack.headerStyle,
  headerTransparent: true,
  headerLeft: () => <BackButton navigation={navigation} color="primary" />,
});

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Welcome" component={Welcome} options={() => ({ headerShown: false })} />
    <Stack.Screen name="Register" component={Register} options={options} />
    <Stack.Screen name="Login" component={Login} options={options} />
  </Stack.Navigator>
);
