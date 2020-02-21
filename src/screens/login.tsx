import React from 'react';

import * as Facebook from 'expo-facebook';

import store from '~/redux/store';
import { actions } from '~/redux/slices/user';

import View from '~/components/view';
import Text from '~/components/text';
import Button from '~/components/button';

export default () => {
  const { login } = actions;

  Facebook.initializeAsync(undefined, undefined);

  const enter = () => store.dispatch(login({ name: 'Richard' }));
  return (
    <View.Center flex={1} color="white">
      <Text.Bold size={50} color="primary">
        Entrar
      </Text.Bold>
      <View.Center mt={50}>
        <Button.Rounded text="Entrar com E-mail" mt={10} primary onPress={enter} />
        <Button.Rounded text="Entrar com Facebook" mt={10} secondary onPress={enter} />
      </View.Center>
    </View.Center>
  );
};
