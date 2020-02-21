import React from 'react';

import store from '~/redux/store';
import { actions } from '~/redux/slices/user';

import Page from '~/screens/sidemenu/page';

import View from '~/components/view';
import Text from '~/components/text';
import Button from '~/components/button';

export default ({ navigation }) => {
  const { logout } = actions;
  const leave = () => store.dispatch(logout());
  return (
    <Page navigation={navigation}>
      <Text.Bold size={50} color="primary">
        Página Inicial
      </Text.Bold>
      <View.Center mt={50}>
        <Button.Rounded text="Realizar Pagamento" mt={10} primary loading={true} />
        <Button.Rounded text="Sair" mt={10} secondary onPress={leave} />
      </View.Center>
    </Page>
  );
};
