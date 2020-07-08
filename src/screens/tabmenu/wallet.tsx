import React from 'react';

import { NavigationProp } from '@react-navigation/native';
import { RootNavigatorScreenList } from '~/navigators';

import { useSelector } from 'react-redux';

import { RootState } from '~/slices';

import * as Grid from '~/components/grid';
import * as Text from '~/components/text';

export type WalletProps = {
  navigation: NavigationProp<RootNavigatorScreenList>;
};

export const Wallet = ({ navigation }: WalletProps) => {
  const cards = useSelector((state: RootState) => state.cards);

  return (
    <Grid.Center flex={1} color="white" p={20}>
      <Text.Bold size={50} align="center" color="primary">
        Minha Carteira
      </Text.Bold>
      <Grid.Scroll my={50}>
        {cards.map(card => (
          <Grid.Center color="primary" p={20} br={5} my={5}>
            <Text.Normal color="white" size={18}>
              {card.number}
            </Text.Normal>
          </Grid.Center>
        ))}
      </Grid.Scroll>
    </Grid.Center>
  );
};
