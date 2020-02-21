import React from 'react';

import connect from '~/redux/connect';

import View from '~/components/view';
import Text from '~/components/text';

export default connect(({ user }) => {
  return (
    <View.Center flex={1} color="white">
      <Text.Bold size={50} color="primary">
        Minha Conta
      </Text.Bold>
      <Text.Bold size={30} mt={30} color="primary">
        {user.name}
      </Text.Bold>
    </View.Center>
  );
});
