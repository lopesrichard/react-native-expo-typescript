import React from 'react';

import store from '~/store';
import CardActions from '~/actions/cards';

import View from '~/components/view';
import Text from '~/components/text';
import Button from '~/components/button';

export default ({ navigation }) => {
  const addCard = () => {
    const card = { number: '1234123412341234' };
    store.dispatch(CardActions.add(card));
  };

  const removeLastCard = () => {
    const card = { number: '1234123412341234' };
    store.dispatch(CardActions.remove(card));
  };

  return (
    <View.Center flex={1} color="white">
      <Text.Bold size={50} color="smoky">
        Buscar
      </Text.Bold>
      <Button.Rounded text="Adicionar cartão" mt={50} primary onPress={addCard} />
      <Button.Rounded text="Remover cartão" mt={10} primary onPress={removeLastCard} />
    </View.Center>
  );
};
