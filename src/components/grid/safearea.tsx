import React, { FunctionComponent } from 'react';

import { SafeAreaView } from 'react-native';

import { ViewStyle, makeViewStyle } from './view';

// ====================================================================================================================
// =============================================== TYPES AND INTERFACES ===============================================
// ====================================================================================================================

export type SafeArea = ViewStyle;

// ====================================================================================================================
// ==================================================== COMPONENTS ====================================================
// ====================================================================================================================

export const SafeArea: FunctionComponent<SafeArea> = props => {
  return <SafeAreaView {...props} style={makeViewStyle(props)} />;
};