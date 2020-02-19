import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '~/screens/sidemenu/home';
import Config from '~/screens/sidemenu/config';
import Orders from '~/screens/sidemenu/orders';
import Messages from '~/screens/sidemenu/messages';
import Registers from '~/screens/sidemenu/registers';

import Icon from '~/components/icon';
import Text from '~/components/text';

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

export default SideMenu;
