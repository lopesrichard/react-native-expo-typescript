import React from 'react';

import { connect } from 'react-redux';
import { addCard, removeCard } from '~/slices/cards';

import View from '~/components/view';
import Text from '~/components/text';
import Button from '~/components/button';

const Search = ({ navigation, addCard, removeCard }) => {
  const onAddCard = () => {
    addCard({ number: '1234123412341234' });
  };

  const onRemoveCard = () => {
    removeCard({ number: '1234123412341234' });
  };

  return (
    <View.Center flex={1} color="white">
      <Text.Bold size={50} color="primary">
        Buscar
      </Text.Bold>
      <Button.Rounded text="Adicionar cartão" mt={50} primary onPress={onAddCard} />
      <Button.Rounded text="Remover cartões" mt={10} secondary onPress={onRemoveCard} />
    </View.Center>
  );
};

const mapDispatch = { addCard, removeCard };

export default connect(null, mapDispatch)(Search);
