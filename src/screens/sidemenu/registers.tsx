import React, { useState, FunctionComponent } from 'react';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootNavigatorScreenList } from '~/navigators';

import { Page } from '~/screens/sidemenu/page';

import * as Text from '~/components/text';
import * as Input from '~/components/input';

export type RegistersProps = {
  navigation: DrawerNavigationProp<RootNavigatorScreenList>;
};

export const Registers: FunctionComponent<RegistersProps> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [document, setDocument] = useState('');
  const [birthDay, setBirthDay] = useState('');

  return (
    <Page navigation={navigation}>
      <Text.Bold size={50} color="primary">
        Cadastros
      </Text.Bold>
      <Input.Animated text={name} icon="user" placeholder="Nome completo" onChangeText={setName} mt={5} />
      <Input.Animated
        text={document}
        keyboardType="numeric"
        mask="cpf"
        icon="file-alt"
        placeholder="Documento"
        onChangeText={setDocument}
        mt={5}
      />
      <Input.Animated
        text={birthDay}
        keyboardType="numeric"
        mask="date"
        icon="calendar"
        placeholder="Data de Nascimento"
        onChangeText={setBirthDay}
        mt={5}
      />
    </Page>
  );
};
