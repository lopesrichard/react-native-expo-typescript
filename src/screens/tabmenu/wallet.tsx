import React from 'react';

import { connect } from 'react-redux';

import View from '~/components/view';
import Text from '~/components/text';

const mapStateToProps = state => {
  return { cards: state.cards };
};

const Wallet = ({ navigation, cards }) => {
  return (
    <View.Center flex={1} color="white" p={20}>
      <Text.Bold size={50} align="center" color="smoky">
        Minha Carteira
      </Text.Bold>
      <View.Scroll my={50}>
        {cards.map(card => (
          <View.Center color="smoky" p={20} br={5}>
            <Text.Normal color="white" size={18}>
              {card.number}
            </Text.Normal>
          </View.Center>
        ))}
      </View.Scroll>
    </View.Center>
  );
};

export default connect(mapStateToProps)(Wallet);
