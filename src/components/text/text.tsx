import React, { FunctionComponent } from 'react';

import { Text, Animated as RNAnimated, TextProps, TextStyle } from 'react-native';

import _ from 'lodash';

import { colors } from '~/util/colors';

// ====================================================================================================================
// =============================================== TYPES AND INTERFACES ===============================================
// ====================================================================================================================

export type CustomTextStyle = {
  position?: TextStyle['position'];
  t?: TextStyle['top'];
  top?: TextStyle['top'];
  l?: TextStyle['left'];
  left?: TextStyle['left'];
  r?: TextStyle['right'];
  right?: TextStyle['right'];
  b?: TextStyle['bottom'];
  bottom?: TextStyle['bottom'];
  self?: TextStyle['alignSelf'];
  align?: TextStyle['textAlign'];
  m?: TextStyle['margin'];
  margin?: TextStyle['margin'];
  ml?: TextStyle['margin'];
  mx?: TextStyle['margin'];
  mr?: TextStyle['margin'];
  mt?: TextStyle['margin'];
  my?: TextStyle['margin'];
  mb?: TextStyle['margin'];
  p?: TextStyle['padding'];
  padding?: TextStyle['padding'];
  pl?: TextStyle['padding'];
  px?: TextStyle['padding'];
  pr?: TextStyle['padding'];
  pt?: TextStyle['padding'];
  py?: TextStyle['padding'];
  pb?: TextStyle['padding'];
  size?: TextStyle['fontSize'];
  weight?: TextStyle['fontWeight'];
  color?: TextStyle['color'];
};

// ====================================================================================================================
// ==================================================== COMPONENTS ====================================================
// ====================================================================================================================

export const ExtraLight: FunctionComponent<CustomTextStyle & TextProps> = props => {
  const { style, properties } = parseProps({ ...props, weight: '200' });
  return <Text {...properties} style={style} />;
};

export const Light: FunctionComponent<CustomTextStyle & TextProps> = props => {
  const { style, properties } = parseProps({ ...props, weight: '300' });
  return <Text {...properties} style={style} />;
};

export const Normal: FunctionComponent<CustomTextStyle & TextProps> = props => {
  const { style, properties } = parseProps({ ...props, weight: '400' });
  return <Text {...properties} style={style} />;
};

export const Medium: FunctionComponent<CustomTextStyle & TextProps> = props => {
  const { style, properties } = parseProps({ ...props, weight: '500' });
  return <Text {...properties} style={style} />;
};

export const SemiBold: FunctionComponent<CustomTextStyle & TextProps> = props => {
  const { style, properties } = parseProps({ ...props, weight: '600' });
  return <Text {...properties} style={style} />;
};

export const Bold: FunctionComponent<CustomTextStyle & TextProps> = props => {
  const { style, properties } = parseProps({ ...props, weight: '700' });
  return <Text {...properties} style={style} />;
};

export const ExtraBold: FunctionComponent<CustomTextStyle & TextProps> = props => {
  const { style, properties } = parseProps({ ...props, weight: '800' });
  return <Text {...properties} style={style} />;
};

export const Black: FunctionComponent<CustomTextStyle & TextProps> = props => {
  const { style, properties } = parseProps({ ...props, weight: '900' });
  return <Text {...properties} style={style} />;
};

// Parece não existir interfaces para o Animated ainda
// export const Animated: FunctionComponent<CustomTextStyle> = props => {
export const Animated: FunctionComponent<any> = props => {
  const { style, properties } = parseProps({ ...props });
  return <RNAnimated.Text {...properties} style={style} />;
};

// ====================================================================================================================
// ==================================================== FUNCTIONS =====================================================
// ====================================================================================================================

const parseProps = <T extends CustomTextStyle>(props: T): { style: Partial<TextStyle>; properties: Partial<T> } => {
  const style: TextStyle = {
    position: props.position || undefined,
    top: props.t || props.top || undefined,
    left: props.l || props.left || undefined,
    right: props.r || props.right || undefined,
    bottom: props.b || props.bottom || undefined,
    alignSelf: props.self || undefined,
    textAlign: props.align || undefined,
    margin: props.m || props.margin || undefined,
    marginLeft: props.ml || props.mx || props.m || undefined,
    marginRight: props.mr || props.mx || props.m || undefined,
    marginTop: props.mt || props.my || props.m || undefined,
    marginBottom: props.mb || props.my || props.m || undefined,
    padding: props.p || props.padding || undefined,
    paddingLeft: props.pl || props.px || props.p || undefined,
    paddingRight: props.pr || props.px || props.p || undefined,
    paddingTop: props.pt || props.py || props.p || undefined,
    paddingBottom: props.pb || props.py || props.p || undefined,
    color: props.color ? colors.parse(props.color) : null,
    fontSize: props.size || undefined,
    fontWeight: props.weight || undefined,
  };

  const properties = _.omit(props, customTextStylePropNames);

  return { style, properties };
};

// ====================================================================================================================
// ==================================================== VARIABLES =====================================================
// ====================================================================================================================

// prettier-ignore
const customTextStylePropNames = [
  'position', 't', 'top', 'l', 'left', 'r', 'right', 'b', 'bottom', 'self',
  'align', 'm', 'margin', 'ml', 'mx', 'mr', 'mt', 'my', 'mb', 'p', 'padding',
  'pl', 'px', 'pr', 'pt', 'py', 'pb', 'size', 'weight', 'color',
];
