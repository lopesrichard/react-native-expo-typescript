import React, { FunctionComponent } from 'react';

import { View } from './view';

// ====================================================================================================================
// =============================================== TYPES AND INTERFACES ===============================================
// ====================================================================================================================

export type Center = View;

// ====================================================================================================================
// ==================================================== COMPONENTS ====================================================
// ====================================================================================================================

export const Center: FunctionComponent<Center> = props => {
  return <View {...{ ...props, align: 'center', justify: 'center' }} />;
};