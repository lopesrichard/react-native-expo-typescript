import 'react-native-gesture-handler';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import Router from '~/navigators';
import { Provider } from 'react-redux';
import store from '~/redux/store';

enableScreens();

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
