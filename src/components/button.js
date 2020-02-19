import React from 'react';

import View from '@components/view';
import Text from '@components/text';

import { coalesce } from '@util/object';
import themes from '@util/themes';

const getTheme = ({ primary, secondary, success, warning, info, danger, light, dark, contrast, outline, disabled }) => {
  const theme = themes[coalesce({ primary, secondary, success, warning, info, danger, light, dark })];
  const [primary_color, secondary_color] = contrast ? [theme.contrast, theme.color] : [theme.color, theme.contrast];
  console.log(secondary_color);
  return {
    view: { color: primary_color, bw: outline ? 1.5 : 0, bc: secondary_color, opacity: disabled ? 0.5 : 1 },
    text: { color: secondary_color },
  };
};

const default_view = { h: 45, w: 250 };
const default_text = { size: 20 };

const Button = props => {
  const { view, text } = getTheme(props);
  return (
    <View.Touchable {...view} {...default_view} {...props} align="center" justify="center" animation="opacity">
      <Text.Normal {...text} {...default_text}>
        {props.text}
      </Text.Normal>
    </View.Touchable>
  );
};

const Flat = props => {
  return <Button {...props} br={5} />;
};

const Rounded = props => {
  return <Button {...props} br={100} />;
};

export default { Flat, Rounded };
