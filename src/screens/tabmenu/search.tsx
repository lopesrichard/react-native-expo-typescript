import React from 'react';

import { NavigationProp } from '@react-navigation/native';
import { RootNavigatorScreenList } from '~/navigators';

import { useDispatch } from 'react-redux';
import { addCard, removeCard } from '~/slices/cards';

import * as Grid from '~/components/grid';
import * as Text from '~/components/text';
import * as Button from '~/components/buttons';

export type SearchProps = {
  navigation: NavigationProp<RootNavigatorScreenList>;
};

export const Search = ({ navigation }: SearchProps) => {
  const dispatch = useDispatch();

  const onAddCard = () => {
    dispatch(addCard({ number: '1234123412341234' }));
  };

  const onRemoveCard = () => {
    dispatch(removeCard({ number: '1234123412341234' }));
  };

  return (
    <Grid.Center flex={1} color="white">
      <Text.Bold size={50} color="primary">
        Buscar
      </Text.Bold>
      <Button.Rounded text="Adicionar cartão" mt={50} primary onPress={onAddCard} />
      <Button.Rounded text="Remover cartões" mt={10} secondary onPress={onRemoveCard} />
    </Grid.Center>
  );
};
