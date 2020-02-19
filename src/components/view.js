import React from 'react';

import {
  View,
  SafeAreaView,
  Animated as Animation,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import colors from '@util/colors';

const align = value => {
  return {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    stretch: 'stretch',
    baseline: 'baseline',
  }[value];
};

const justify = value => {
  return {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
  }[value];
};

const self = value => {
  return {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    stretch: 'stretch',
    baseline: 'baseline',
    auto: 'auto',
  }[value];
};

const parseProps = props => {
  const style = {
    flex: props.flex || undefined,
    position: props.position || undefined,
    flexDirection: props.direction || undefined,
    flexGrow: props.grow || undefined,
    flexWrap: props.wrap || undefined,
    width: props.w || props.width || props.size || undefined,
    height: props.h || props.height || props.size || undefined,
    maxHeight: props.maxh || props.maxHeight || undefined,
    minHeight: props.minh || props.minHeight || undefined,
    maxWidth: props.maxw || props.maxWidth || undefined,
    minWidth: props.minw || props.minWidth || undefined,
    top: props.t || props.top || undefined,
    left: props.l || props.left || undefined,
    right: props.r || props.right || undefined,
    bottom: props.b || props.bottom || undefined,
    alignItems: props.align ? align(props.align) : undefined,
    justifyContent: props.justify ? justify(props.justify) : undefined,
    alignSelf: props.self ? self(props.self) : undefined,
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
    borderWidth: props.bw || undefined,
    borderLeftWidth: props.blw || props.bxw || props.bw || undefined,
    borderRightWidth: props.brw || props.bxw || props.bw || undefined,
    borderTopWidth: props.btw || props.byw || props.bw || undefined,
    borderBottomWidth: props.bbw || props.byw || props.bw || undefined,
    borderColor: props.bc ? colors[props.bc] : undefined,
    borderLeftColor: props.blc || props.bxc || props.bc ? colors[props.blc || props.bxc || props.bc] : undefined,
    borderRightColor: props.brc || props.bxc || props.bc ? colors[props.brc || props.bxc || props.bc] : undefined,
    borderTopColor: props.btc || props.byc || props.bc ? colors[props.btc || props.byc || props.bc] : undefined,
    borderBottomColor: props.bbc || props.byc || props.bc ? colors[props.bbc || props.byc || props.bc] : undefined,
    borderRadius: props.br || undefined,
    borderTopLeftRadius: props.btlr || props.btr || props.br || undefined,
    borderTopRightRadius: props.btrr || props.btr || props.br || undefined,
    borderBottomLeftRadius: props.bblr || props.bbr || props.br || undefined,
    borderBottomRightRadius: props.bbrr || props.bbr || props.br || undefined,
    backgroundColor: props.color ? colors[props.color] : undefined,
    elevation: props.shadow || undefined,
    shadow: props.shadow ? `0 ${props.shadow}px ${props.shadow}px #999` : undefined,
    opacity: props.opacity || undefined,
    transform: props.transform || undefined,
  };

  for (var prop in style) {
    if (style[prop] === undefined) {
      delete style[prop];
    }
  }

  delete props.flex;
  delete props.position;
  delete props.direction;
  delete props.grow;
  delete props.wrap;
  delete props.w;
  delete props.width;
  delete props.h;
  delete props.height;
  delete props.size;
  delete props.maxh;
  delete props.maxHeight;
  delete props.minh;
  delete props.minHeight;
  delete props.maxw;
  delete props.maxWidth;
  delete props.minw;
  delete props.minWidth;
  delete props.t;
  delete props.top;
  delete props.l;
  delete props.left;
  delete props.r;
  delete props.right;
  delete props.b;
  delete props.bottom;
  delete props.align;
  delete props.justify;
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
  delete props.bw;
  delete props.blw;
  delete props.bxw;
  delete props.brw;
  delete props.btw;
  delete props.bbw;
  delete props.byw;
  delete props.bc;
  delete props.blc;
  delete props.bxc;
  delete props.brc;
  delete props.btc;
  delete props.byc;
  delete props.bbc;
  delete props.br;
  delete props.btlr;
  delete props.btr;
  delete props.btrr;
  delete props.bblr;
  delete props.bbr;
  delete props.bbrr;
  delete props.color;
  delete props.shadow;
  delete props.opacity;
  delete props.transform;

  return { style: style, properties: props };
};

const Column = props => {
  const { style, properties } = parseProps({ ...props, direction: 'column' });
  return <View {...properties} style={style} />;
};

const Row = props => {
  const { style, properties } = parseProps({ ...props, direction: 'row' });
  return <View {...properties} style={style} />;
};

const Center = props => {
  const { style, properties } = parseProps({ ...props, align: 'center', justify: 'center' });
  return <View {...properties} style={style} />;
};

const Absolute = props => {
  return <View {...props} style={StyleSheet.absoluteFill} />;
};

const SafeArea = props => {
  const { style, properties } = parseProps({ ...props });
  return <SafeAreaView {...properties} style={style} />;
};

const Animated = props => {
  const { style, properties } = parseProps({ ...props });
  return <Animation.View {...properties} style={style} />;
};

const Touchable = props => {
  const { style, properties } = parseProps({ ...props });
  switch (props.animation) {
    case 'opacity':
      return <TouchableOpacity {...properties} style={style} />;
    default:
      return <TouchableWithoutFeedback {...properties} style={style} />;
  }
};

export default { Column, Row, Center, Absolute, SafeArea, Animated, Touchable };
