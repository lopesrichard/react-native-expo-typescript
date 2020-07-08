import React from 'react';

import { NavigationProp } from '@react-navigation/native';
import { RootNavigatorScreenList } from '~/navigators';

import { useSelector } from 'react-redux';

import { RootState } from '~/slices';

import * as Grid from '~/components/grid';
import * as Text from '~/components/text';

export type AccountProps = {
  navigation: NavigationProp<RootNavigatorScreenList>;
};

export const Account = ({ navigation }: AccountProps) => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <Grid.Center flex={1} color="white">
      <Text.Bold size={50} color="primary">
        Minha Conta
      </Text.Bold>
      <Text.Bold size={30} mt={30} color="primary">
        {user.name}
      </Text.Bold>
    </Grid.Center>
  );
};
