import React from 'react';

import Page from '~/screens/sidemenu/page';

import View from '~/components/view';
import Text from '~/components/text';
import Button from '~/components/button';

export default ({ navigation }) => {
  const logout = () => navigation.navigate('Login');

  return (
    <Page navigation={navigation}>
      <Text.Bold size={50} color="smoky">
        Página Inicial
      </Text.Bold>
      <View.Center mt={50}>
        <Button.Rounded text="Realizar Pagamento" mt={10} primary />
        <Button.Rounded text="Sair" mt={10} secondary onPress={logout} />
      </View.Center>
    </Page>
  );
};
