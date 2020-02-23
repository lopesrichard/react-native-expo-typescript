import React from 'react';

import { connect } from 'react-redux';
import { logout } from '~/slices/user';

import Page from '~/screens/sidemenu/page';

import View from '~/components/view';
import Text from '~/components/text';
import Button from '~/components/button';

const Home = ({ navigation, logout }) => {
  return (
    <Page navigation={navigation}>
      <Text.Bold size={50} color="primary">
        Página Inicial
      </Text.Bold>
      <View.Center mt={50}>
        <Button.Rounded text="Realizar Pagamento" mt={10} primary loading={true} />
        <Button.Rounded text="Sair" mt={10} secondary onPress={() => logout()} />
      </View.Center>
    </Page>
  );
};

const mapDispatch = { logout };

export default connect(null, mapDispatch)(Home);
