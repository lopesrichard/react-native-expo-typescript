import React from 'react';

import LottieView from 'lottie-react-native';
import * as Grid from '~/components/grid';

import { animations } from '~/assets/animations';

export const Splash = () => {
  return (
    <Grid.Center flex={1} color="primary">
      <LottieView source={animations.loading} autoPlay loop />
    </Grid.Center>
  );
};
