import React from 'react';

import * as Facebook from 'expo-facebook';

import * as Grid from '~/components/grid';
import * as Text from '~/components/text';
import * as Button from '~/components/buttons';

import { RootNavigatorScreenList } from '~/navigators';
import { NavigationProp } from '@react-navigation/native';

export type RegisterProps = {
  navigation: NavigationProp<RootNavigatorScreenList>;
};

export const Register = ({ navigation }: RegisterProps) => {
  Facebook.initializeAsync(undefined, undefined);

  const login = () => navigation.navigate('TabMenu');
  return (
    <Grid.Center flex={1} color="white">
      <Text.Bold size={50} color="primary">
        Cadastrar
      </Text.Bold>
      <Grid.Center mt={50}>
        <Button.Rounded text="Criar com E-mail" mt={10} primary onPress={login} />
        <Button.Rounded text="Criar com Facebook" mt={10} secondary onPress={login} />
      </Grid.Center>
    </Grid.Center>
  );
};
