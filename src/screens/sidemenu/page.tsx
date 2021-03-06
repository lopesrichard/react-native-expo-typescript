import React, { FunctionComponent } from 'react';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootNavigatorScreenList } from '~/navigators';

import { useSelector } from 'react-redux';
import { RootState } from '~/slices';

import * as Grid from '~/components/grid';
import * as Text from '~/components/text';

import { Icon } from '~/components/icon';

export type PageProps = {
  navigation: DrawerNavigationProp<RootNavigatorScreenList>;
};

export const Page: FunctionComponent<PageProps> = ({ children, navigation }) => {
  const openDrawer = () => navigation.openDrawer();

  const user = useSelector((state: RootState) => state.user);

  return (
    <Grid.Center flex={1} color="white">
      <Grid.Touchable position="absolute" t={20} l={20} onPress={openDrawer} animation="opacity">
        <Icon name="bars" color="primary" size={25} />
      </Grid.Touchable>
      <Grid.Touchable position="absolute" t={20} r={20} onPress={openDrawer} animation="opacity">
        <Text.Bold size={18} color="primary">
          {user.name}
        </Text.Bold>
      </Grid.Touchable>
      {children}
    </Grid.Center>
  );
};
