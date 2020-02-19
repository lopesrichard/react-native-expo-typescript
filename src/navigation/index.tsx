import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from '@screens/login';

import Search from '@screens/tabmenu/search';
import Account from '@screens/tabmenu/account';
import Wallet from '@screens/tabmenu/wallet';

import Home from '@screens/sidemenu/home';
import Config from '@screens/sidemenu/config';
import Orders from '@screens/sidemenu/orders';
import Messages from '@screens/sidemenu/messages';
import Registers from '@screens/sidemenu/registers';

import Icon from '@components/icon';
import Text from '@components/text';

import JumpTabBar from '@components/navigator/tabs/jump';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const getDrawerOptions = (label, icon, navigation) => {
  return {
    contentComponent: null,
    drawerLabel: ({ focused, size }) => <Text.Normal {...{ color: 'smoky', size }}>{label}</Text.Normal>,
    drawerIcon: ({ focused }) => <Icon color='smoky' name={icon} size={20} />
  };
};

// prettier-ignore
const SideMenu = () => (
  <Drawer.Navigator lazy={false}>
    <Drawer.Screen name="home" component={Home} options={getDrawerOptions.bind(this, 'Página Inicial', 'home')} />
    <Drawer.Screen name="orders" component={Orders} options={getDrawerOptions.bind(this, 'Pedidos', 'truck')} />
    <Drawer.Screen name="messages" component={Messages} options={getDrawerOptions.bind(this, 'Mensagens', 'envelope-open-text')} />
    <Drawer.Screen name="registers" component={Registers} options={getDrawerOptions.bind(this, 'Cadastros', 'user-plus')} />
    <Drawer.Screen name="config" component={Config} options={getDrawerOptions.bind(this, 'Configurações', 'cog')} />
  </Drawer.Navigator>
);

const tabs = [
  { label: 'Início', icon: 'home' },
  { label: 'Busca', icon: 'search' },
  { label: 'Minha Carteira', icon: 'wallet' },
  { label: 'Conta', icon: 'user-alt' }
];

const TabMenu = () => (
  <Tab.Navigator lazy={false} tabBar={props => <JumpTabBar {...{ ...props, tabs }} />}>
    <Tab.Screen name='home' component={SideMenu} />
    <Tab.Screen name='search' component={Search} />
    <Tab.Screen name='wallet' component={Wallet} />
    <Tab.Screen name='account' component={Account} />
  </Tab.Navigator>
);

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={({ navigation }) => ({ header: () => null })}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='TabMenu' component={TabMenu} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
