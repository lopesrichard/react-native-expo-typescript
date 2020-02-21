import React from 'react';

import { ActivityIndicator } from 'react-native';

import colors from '~/util/colors';

export default props => {
  return <ActivityIndicator {...{ ...props, color: colors.parse(props.color) }} />;
};
