import React from 'react';

import connect from '~/redux/connect';

import View from '~/components/view';
import Text from '~/components/text';
import Icon from '~/components/icon';

export default connect(({ children, navigation, user }) => {
  const openDrawer = () => navigation.openDrawer();

  return (
    <View.Center flex={1} color="white">
      <View.Touchable position="absolute" t={20} l={20} onPress={openDrawer} animation="opacity">
        <Icon name="bars" color="primary" size={25} />
      </View.Touchable>
      <View.Column position="absolute" t={20} r={20} onPress={openDrawer} animation="opacity">
        <Text.Bold size={18} color="primary">
          {user.name}
        </Text.Bold>
      </View.Column>
      {children}
    </View.Center>
  );
});
