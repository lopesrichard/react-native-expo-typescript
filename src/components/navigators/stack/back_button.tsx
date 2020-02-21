import React from 'react';

import View from '~/components/view';
import Icon from '~/components/icon';

export default ({ navigation, color }) => {
  return (
    <View.Touchable flex={1} animation="opacity" onPress={() => navigation.goBack()} px={25} hitSlop={20}>
      <Icon name="arrow-left" size={25} color={color} />
    </View.Touchable>
  );
};
