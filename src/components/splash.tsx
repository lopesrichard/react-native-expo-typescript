import React from 'react';

import LottieView from 'lottie-react-native';
import View from '~/components/view';

import animations from '~/assets/animations';

export default () => {
  return (
    <View.Center flex={1} color="primary">
      <LottieView source={animations.loading} autoPlay loop />
    </View.Center>
  );
};
