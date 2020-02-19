import React from 'react';

import Page from '~/screens/sidemenu/page';

import Text from '~/components/text';

export default ({ navigation }) => {
  return (
    <Page navigation={navigation}>
      <Text.Bold size={50} color="smoky">
        Pedidos
      </Text.Bold>
    </Page>
  );
};
