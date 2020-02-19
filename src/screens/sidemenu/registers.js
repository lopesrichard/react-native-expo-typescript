import React, { useState } from 'react';

import Page from '@screens/sidemenu/page';

import Text from '@components/text';
import Input from '@components/input';

export default ({ navigation }) => {
  const [name, setName] = useState('');
  return (
    <Page navigation={navigation}>
      <Text.Bold size={50} color="smoky">
        Cadastros
      </Text.Bold>
      <Input.Text
        text={name}
        placeholder="Nome completo"
        container={{ w: '70%', bw: 1, bc: 'smoky', px: 15, br: 100 }}
        icon={{ container: { color: 'smoky', br: 100, p: 5, mr: 5 }, name: 'user-alt', color: 'white' }}
        onChangeText={text => setName(text)}
      />
    </Page>
  );
};
