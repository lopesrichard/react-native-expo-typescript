import { ShadowPropTypesIOS } from 'react-native';

import { colors } from '~/util/colors';

// ====================================================================================================================
// =============================================== TYPES AND INTERFACES ===============================================
// ====================================================================================================================

export type Shadow = {
  /**
   * Shadow
   */
  shadow?: number;
};

// ====================================================================================================================
// ==================================================== FUNCTIONS =====================================================
// ====================================================================================================================

export const makeShadowStyle = (props: Shadow): typeof ShadowPropTypesIOS => {
  const style: typeof ShadowPropTypesIOS = {
    shadowColor: colors.shadow,
    shadowOffset: {
      width: props.shadow,
      height: props.shadow,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
  };
  return style;
};
