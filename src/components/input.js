import React, { useRef } from 'react';

import colors from '@util/colors';

import View from '@components/view';
import Label from '@components/text';
import Icon from '@components/icon';

import { TextInput } from 'react-native';

const parseProps = props => {
  const style = {};

  for (var prop in style) {
    if (style[prop] === undefined) {
      delete style[prop];
    }
  }

  delete props.placeholder;
  delete props.container;
  delete props.input;
  delete props.label;
  delete props.text;
  delete props.icon;

  return { style: style, properties: props };
};

const default_container = {};
const default_icon_container = {};
const default_icon = { size: 14 };
const default_label = { size: 16 };
const default_input = {};

const Text = props => {
  const { container, label, icon } = props;
  const { style, properties } = parseProps({ ...props });

  const onFocus = () => {
    props.onChangeText('');
    props.onFocus && props.onFocus();
  };

  const onBlur = () => {
    props.onChangeText(props.placeholder);
    props.onBlur && props.onBlur();
  };

  const ref = useRef(null);

  return (
    <View.Column {...default_container} {...container}>
      {label && (
        <Label.Bold {...default_label} {...label}>
          {label.text}
        </Label.Bold>
      )}
      <View.Row align="center">
        {icon && (
          <View.Column {...default_icon_container} {...icon.container}>
            <Icon {...default_icon} {...icon} />
          </View.Column>
        )}
        <TextInput
          ref={ref}
          {...default_input}
          {...properties}
          style={{ ...style, width: '100%' }}
          onFocus={onFocus}
          onBlur={onBlur}>
          <Label.Normal color="smoky" size={16}>
            {props.text === '' && (!ref.current || !ref.current.isFocused()) ? props.placeholder : props.text}
          </Label.Normal>
        </TextInput>
      </View.Row>
    </View.Column>
  );
};

export default { Text };
