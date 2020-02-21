import React from 'react';

import View from '~/components/view';
import Text from '~/components/text';

import themes from '~/util/themes';

const theme = (props: any) => {
  const { contrast, outline, disabled } = props;
  const theme = themes.resolve(props);
  return {
    view: {
      color: disabled ? theme.disabled.color : contrast ? theme.contrast : theme.color,
      bw: outline ? 1.5 : 0,
      bc: disabled ? theme.disabled.contrast : contrast ? theme.color : theme.contrast,
    },
    text: { color: disabled ? theme.disabled.contrast : contrast ? theme.color : theme.contrast },
  };
};

const default_view = { h: 45, w: 250 };
const default_text = { size: 20 };

const Button = props => {
  const { view, text } = theme(props);
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
