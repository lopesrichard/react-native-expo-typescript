import React from 'react';

import * as Facebook from 'expo-facebook';

import View from '~/components/view';
import Text from '~/components/text';
import Button from '~/components/button';

export default ({ navigation }) => {
  Facebook.initializeAsync(undefined, undefined);

  const login = () => navigation.navigate('TabMenu');
  return (
    <View.Center flex={1} color="white">
      <Text.Bold size={50} color="primary">
        Cadastrar
      </Text.Bold>
      <View.Center mt={50}>
        <Button.Rounded text="Criar com E-mail" mt={10} primary onPress={login} />
        <Button.Rounded text="Criar com Facebook" mt={10} secondary onPress={login} />
      </View.Center>
    </View.Center>
  );
};
