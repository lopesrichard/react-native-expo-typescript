import React from 'react';

import { ActivityIndicator } from 'react-native';

import { colors } from '~/util/colors';

export const Spinner = props => {
  return <ActivityIndicator {...{ ...props, color: colors.parse(props.color) }} />;
};
