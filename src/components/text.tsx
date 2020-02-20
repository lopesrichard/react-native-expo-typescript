import React from 'react';

import { Text } from 'react-native';

import colors from '~/util/colors';

const Thin = props => {
  const { style, properties } = parseProps({ ...props, weight: '100' });
  return <Text {...properties} style={style} />;
};

const ExtraLight = props => {
  const { style, properties } = parseProps({ ...props, weight: '200' });
  return <Text {...properties} style={style} />;
};

const Light = props => {
  const { style, properties } = parseProps({ ...props, weight: '300' });
  return <Text {...properties} style={style} />;
};

const Normal = props => {
  const { style, properties } = parseProps({ ...props, weight: '400' });
  return <Text {...properties} style={style} />;
};

const Medium = props => {
  const { style, properties } = parseProps({ ...props, weight: '500' });
  return <Text {...properties} style={style} />;
};

const SemiBold = props => {
  const { style, properties } = parseProps({ ...props, weight: '600' });
  return <Text {...properties} style={style} />;
};

const Bold = props => {
  const { style, properties } = parseProps({ ...props, weight: '700' });
  return <Text {...properties} style={style} />;
};

const ExtraBold = props => {
  const { style, properties } = parseProps({ ...props, weight: '800' });
  return <Text {...properties} style={style} />;
};

const Black = props => {
  const { style, properties } = parseProps({ ...props, weight: '900' });
  return <Text {...properties} style={style} />;
};

export default {
  Thin,
  ExtraLight,
  Light,
  Normal,
  Medium,
  SemiBold,
  Bold,
  ExtraBold,
  Black,
};

const parseProps = props => {
  const style = {
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
    color: props.color ? colors[props.color] : null,
    fontSize: props.size || undefined,
    fontWeight: props.weight || undefined,
  };

  for (let propName in style) {
    if (style[propName] === null) {
      delete style[propName];
    }
  }

  delete props.pos;
  delete props.position;
  delete props.t;
  delete props.top;
  delete props.l;
  delete props.left;
  delete props.r;
  delete props.right;
  delete props.b;
  delete props.bottom;
  delete props.self;
  delete props.m;
  delete props.margin;
  delete props.ml;
  delete props.mx;
  delete props.mr;
  delete props.mt;
  delete props.my;
  delete props.mb;
  delete props.p;
  delete props.padding;
  delete props.pl;
  delete props.px;
  delete props.pr;
  delete props.pt;
  delete props.py;
  delete props.pb;
  delete props.color;
  delete props.size;
  delete props.weight;

  return { style: style, properties: props };
};
