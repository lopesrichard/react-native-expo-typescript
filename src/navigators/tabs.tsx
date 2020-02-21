import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SideMenu from '~/navigators/drawer';
import Search from '~/screens/tabmenu/search';
import Account from '~/screens/tabmenu/account';
import Wallet from '~/screens/tabmenu/wallet';

import SlideTabBar from '~/components/navigators/tabs/slide';

const Tab = createBottomTabNavigator();

const tabs = [
  { label: 'Início', icon: 'home' },
  { label: 'Busca', icon: 'search' },
  { label: 'Minha Carteira', icon: 'wallet' },
  { label: 'Conta', icon: 'user-alt' },
];

const component = props => <SlideTabBar {...{ ...props, tabs }} />;

const TabMenu = () => (
  <Tab.Navigator tabBar={component}>
    <Tab.Screen name="home" component={SideMenu} />
    <Tab.Screen name="search" component={Search} />
    <Tab.Screen name="wallet" component={Wallet} />
    <Tab.Screen name="account" component={Account} />
  </Tab.Navigator>
);

export default TabMenu;
