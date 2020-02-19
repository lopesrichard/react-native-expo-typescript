import 'react-native-gesture-handler';
import React from 'react';
import { useScreens } from 'react-native-screens';
import Router from '@navigation';

useScreens();

export default function App() {
  return <Router />;
}
