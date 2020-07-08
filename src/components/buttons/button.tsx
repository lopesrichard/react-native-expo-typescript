import React from 'react';

import _ from 'lodash';

import * as Grid from '~/components/grid';
import * as Text from '~/components/text';

import { Spinner } from '~/components/spinner';

import { themes } from '~/util/themes';

import { ButtonProps } from 'react-native';

import { ThemeList } from '~/util/themes';

// ====================================================================================================================
// =============================================== TYPES AND INTERFACES ===============================================
// ====================================================================================================================

export type ThemeButtonProps = {
  [key in ThemeList]?: boolean;
};

export type CustomButtonProps = ThemeButtonProps &
  Omit<ButtonProps, 'title'> &
  Grid.View & {
    text: string;
    loading?: boolean;
    contrast?: boolean;
    outline?: boolean;
  };

// ====================================================================================================================
// ==================================================== COMPONENTS ====================================================
// ====================================================================================================================

export const Button = (props: CustomButtonProps) => {
  const { view, text } = theme(props);
  return (
    <Grid.Touchable {...view} {...default_view} {...props} align="center" justify="center" animation="opacity">
      {props.loading ? (
        <Spinner {...text} />
      ) : (
        <Text.Normal {...text} {...default_text}>
          {props.text}
        </Text.Normal>
      )}
    </Grid.Touchable>
  );
};

// ====================================================================================================================
// ==================================================== FUNCTIONS =====================================================
// ====================================================================================================================

const theme = (props: CustomButtonProps) => {
  const { contrast, outline, disabled } = props;

  const theme = themes.resolve(
    _.pick(props, 'primary', 'secondary', 'success', 'warning', 'info', 'danger', 'dark', 'light'),
  );

  return {
    view: {
      color: disabled ? theme.disabled.color : contrast ? theme.contrast : theme.color,
      bw: outline ? 1.5 : 0,
      bc: disabled ? theme.disabled.contrast : contrast ? theme.color : theme.contrast,
    },
    text: { color: disabled ? theme.disabled.contrast : contrast ? theme.color : theme.contrast },
  };
};

// ====================================================================================================================
// ==================================================== VARIABLES =====================================================
// ====================================================================================================================

const default_view = { h: 45, w: 250 };
const default_text = { size: 20 };
