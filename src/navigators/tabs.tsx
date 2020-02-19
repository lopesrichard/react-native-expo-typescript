import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SideMenu from '~/navigators/drawer';
import Search from '~/screens/tabmenu/search';
import Account from '~/screens/tabmenu/account';
import Wallet from '~/screens/tabmenu/wallet';

import JumpTabBar from '~/components/navigators/tabs/jump';

const Tab = createBottomTabNavigator();

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

export default TabMenu;
