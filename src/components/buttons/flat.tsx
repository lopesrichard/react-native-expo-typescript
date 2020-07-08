import React from 'react';
import { Button, CustomButtonProps } from './button';

// ====================================================================================================================
// ==================================================== COMPONENTS ====================================================
// ====================================================================================================================

export const Flat = (props: CustomButtonProps) => {
  return <Button {...props} br={5} />;
};