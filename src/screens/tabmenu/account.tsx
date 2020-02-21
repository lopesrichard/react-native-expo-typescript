import React from 'react';

import View from '~/components/view';
import Text from '~/components/text';

export default ({ navigation }) => {
  return (
    <View.Center flex={1} color="white">
      <Text.Bold size={50} color="primary">
        Minha Conta
      </Text.Bold>
    </View.Center>
  );
};
