import React from 'react';

import { NavigationProp } from '@react-navigation/native';
import { RootNavigatorScreenList } from '~/navigators';

import { useDispatch } from 'react-redux';

import * as Facebook from 'expo-facebook';

import * as Grid from '~/components/grid';
import * as Text from '~/components/text';
import * as Button from '~/components/buttons';

import { login } from '~/slices/user';

export type LoginProps = {
  navigation: NavigationProp<RootNavigatorScreenList>;
};

export const Login = (props: LoginProps) => {
  const dispatch = useDispatch();

  Facebook.initializeAsync(undefined, undefined);

  const enter = () => dispatch(login({ name: 'Richard' }));

  return (
    <Grid.Center flex={1} color="white">
      <Text.Bold size={50} color="primary">
        Entrar
      </Text.Bold>
      <Grid.Center mt={50}>
        <Button.Rounded text="Entrar com E-mail" mt={10} primary onPress={enter} />
        <Button.Rounded text="Entrar com Facebook" mt={10} secondary onPress={enter} />
      </Grid.Center>
    </Grid.Center>
  );
};
