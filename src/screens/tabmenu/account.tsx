import React from 'react';

import { connect } from 'react-redux';

import View from '~/components/view';
import Text from '~/components/text';

const Account = ({ user }) => {
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
};

const mapState = state => ({
  user: state.user,
});

export default connect(mapState)(Account);
