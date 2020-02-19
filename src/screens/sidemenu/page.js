import React from 'react';

import View from '@components/view';
import Icon from '@components/icon';

export default ({ children, navigation }) => {
  const openDrawer = () => navigation.openDrawer();

  return (
    <View.Center flex={1} color="white">
      <View.Touchable position="absolute" t={20} l={20} onPress={openDrawer} animation="opacity">
        <Icon name="bars" color="smoky" size={25} />
      </View.Touchable>
      {children}
    </View.Center>
  );
};
