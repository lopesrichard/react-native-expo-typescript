import React from 'react';

import store from '~/redux/store';
import { actions } from '~/redux/cards';

import View from '~/components/view';
import Text from '~/components/text';
import Button from '~/components/button';

export default ({ navigation }) => {
  const { add, remove } = actions;

  const addCard = () => {
    const card = { number: '1234123412341234' };
    store.dispatch(add(card));
  };

  const removeCards = () => {
    const card = { number: '1234123412341234' };
    store.dispatch(remove(card));
  };

  return (
    <View.Center flex={1} color="white">
      <Text.Bold size={50} color="smoky">
        Buscar
      </Text.Bold>
      <Button.Rounded text="Adicionar cartão" mt={50} primary onPress={addCard} />
      <Button.Rounded text="Remover cartões" mt={10} primary onPress={removeCards} />
    </View.Center>
  );
};
