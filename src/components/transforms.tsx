import { TransformsStyle } from 'react-native';

// ====================================================================================================================
// =============================================== TYPES AND INTERFACES ===============================================
// ====================================================================================================================

export type Transform = {
  /**
   * Transform
   */
  transform?: TransformsStyle['transform'];
};

// ====================================================================================================================
// ==================================================== FUNCTIONS =====================================================
// ====================================================================================================================

export const makeTransformStyle = (props: Transform): TransformsStyle => {
  const style: TransformsStyle = {
    transform: props.transform || undefined,
  };
  return style;
};
