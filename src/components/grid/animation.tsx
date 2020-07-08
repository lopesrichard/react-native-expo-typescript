import React, { FunctionComponent } from 'react';

import LottieView from 'lottie-react-native';

import { ViewStyle, makeViewStyle } from './view';

import { AnimationList, animations } from '~/assets/animations';

// ====================================================================================================================
// =============================================== TYPES AND INTERFACES ===============================================
// ====================================================================================================================

export type Animation = ViewStyle & {
  name: AnimationList;
};

// ====================================================================================================================
// ==================================================== COMPONENTS ====================================================
// ====================================================================================================================

export const Animation: FunctionComponent<Animation> = ({ name, ...props }) => {
  return <LottieView {...props} style={makeViewStyle(props)} source={animations[name]} />;
};
