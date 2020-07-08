import 'react-native-gesture-handler';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { Router } from '~/navigators';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '~/slices';
import { Reactotron } from './reactotron';
import { Splash } from '~/components/splash';
import * as Storage from '~/services/storage';

enableScreens();

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState();
  const [cards, setCards] = React.useState();

  React.useEffect(() => {
    (async () => {
      setUser(await Storage.load('@user'));
      setCards(await Storage.load('@cards'));
      setLoading(false);
    })();
  }, []);

  const store = configureStore({
    reducer: rootReducer,
    enhancers: [Reactotron.createEnhancer()],
    preloadedState: { user, cards },
  });

  if (loading) {
    return <Splash />;
  }

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
