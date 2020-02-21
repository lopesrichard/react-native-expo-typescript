import React from 'react';

import View from '~/components/view';
import Text from '~/components/text';
import Button from '~/components/button';

export default ({ navigation }) => {
  const register = () => navigation.navigate('Register');
  const login = () => navigation.navigate('Login');
  return (
    <View.Center flex={1} color="white">
      <Text.Bold size={50} color="primary">
        Bem Vindo
      </Text.Bold>
      <View.Center mt={50}>
        <Button.Rounded text="Cadastrar" mt={10} primary onPress={register} />
        <Button.Rounded text="Entrar" mt={10} secondary onPress={login} />
      </View.Center>
    </View.Center>
  );
};
