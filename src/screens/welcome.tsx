import React from 'react';

import { RootNavigatorScreenList } from '~/navigators';
import { NavigationProp } from '@react-navigation/native';

import * as Grid from '~/components/grid';
import * as Text from '~/components/text';
import * as Button from '~/components/buttons';

export type WelcomeProps = {
  navigation: NavigationProp<RootNavigatorScreenList>;
};

export const Welcome = ({ navigation }: WelcomeProps) => {
  const register = () => navigation.navigate('Register');
  const login = () => navigation.navigate('Login');
  return (
    <Grid.Center flex={1} color="white">
      <Text.Bold size={50} color="primary">
        Bem Vindo
      </Text.Bold>
      <Grid.Center mt={50}>
        <Button.Rounded text="Cadastrar" mt={10} primary onPress={register} />
        <Button.Rounded text="Entrar" mt={10} secondary onPress={login} />
      </Grid.Center>
    </Grid.Center>
  );
};
