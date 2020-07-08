import React, { FunctionComponent } from 'react';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootNavigatorScreenList } from '~/navigators';

import { useDispatch } from 'react-redux';
import { logout } from '~/slices/user';

import { Page } from '~/screens/sidemenu/page';

import * as Grid from '~/components/grid';
import * as Text from '~/components/text';
import * as Button from '~/components/buttons';

export type HomeProps = {
  navigation: DrawerNavigationProp<RootNavigatorScreenList>;
};

export const Home: FunctionComponent<HomeProps> = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <Page navigation={navigation}>
      <Text.Bold size={50} color="primary">
        Página Inicial
      </Text.Bold>
      <Grid.Center mt={50}>
        <Button.Rounded text="Realizar Pagamento" mt={10} primary loading={true} onPress={console.log} />
        <Button.Rounded text="Sair" mt={10} secondary onPress={() => dispatch(logout())} />
      </Grid.Center>
    </Page>
  );
};
