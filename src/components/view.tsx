import React from 'react';

import {
  View,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  Animated as RNAnimated,
  Image as RNImage,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';

import LottieView from 'lottie-react-native';

import colors from '~/util/colors';
import images from '~/assets/images';
import animations from '~/assets/animations';

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
    borderColor: props.bc ? colors.parse(props.bc) : undefined,
    borderLeftColor: props.blc || props.bxc || props.bc ? colors.parse(props.blc || props.bxc || props.bc) : undefined,
    borderRightColor: props.brc || props.bxc || props.bc ? colors.parse(props.brc || props.bxc || props.bc) : undefined,
    borderTopColor: props.btc || props.byc || props.bc ? colors.parse(props.btc || props.byc || props.bc) : undefined,
    borderBottomColor:
      props.bbc || props.byc || props.bc ? colors.parse(props.bbc || props.byc || props.bc) : undefined,
    borderRadius: props.br || undefined,
    borderTopLeftRadius: props.btlr || props.btr || props.br || undefined,
    borderTopRightRadius: props.btrr || props.btr || props.br || undefined,
    borderBottomLeftRadius: props.bblr || props.bbr || props.br || undefined,
    borderBottomRightRadius: props.bbrr || props.bbr || props.br || undefined,
    backgroundColor: props.color ? colors.parse(props.color) : undefined,
    elevation: props.shadow || undefined,
    shadow: props.shadow ? `0 ${props.shadow}px ${props.shadow}px #999` : undefined,
    opacity: props.opacity || undefined,
    transform: props.transform || undefined,
    pointerEvents: props.pointerEvents || undefined,
    zIndex: props.z || undefined,
  };

  props.source = props.name ? images[props.name] : props.uri ? { uri: props.uri } : undefined;
  props.hitSlop = props.hitSlop
    ? { top: props.hitSlop, bottom: props.hitSlop, left: props.hitSlop, right: props.hitSlop }
    : undefined;

  for (var prop in style) {
    if (style[prop] === undefined) {
      delete style[prop];
    }
  }

  for (var prop in props) {
    if (props[prop] === undefined) {
      delete props[prop];
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
  delete props.name;
  delete props.uri;
  delete props.z;

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

const Scroll = props => {
  const { style, properties } = parseProps({ ...props });
  return <ScrollView {...properties} contentContainerStyle={style} keyboardShouldPersistTaps="handle" />;
};

const Animated = props => {
  const { style, properties } = parseProps({ ...props });
  return <RNAnimated.View {...properties} style={style} />;
};

const Background = props => {
  const { style, properties } = parseProps({ ...props });
  return <ImageBackground {...properties} style={style} />;
};

const Animation = props => {
  const { style, properties } = parseProps({ ...props });
  return <LottieView {...properties} style={style} source={animations[props.name]} />;
};

const Touchable = props => {
  const { style, properties } = parseProps({ ...props });
  switch (props.animation) {
    case 'none':
      return <TouchableWithoutFeedback {...properties} style={style} />;
    default:
      return <TouchableOpacity {...properties} style={style} />;
  }
};

const KeyboardAvoid = props => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1 }}>
        {props.children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const Image = props => {
  const { style, properties } = parseProps({ ...props });

  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  const getSizeBySource = source => {
    return RNImage.resolveAssetSource(source);
  };

  const getSizeByUri = uri => {
    return new Promise((resolve, reject) => {
      RNImage.getSize(
        uri,
        (width, height) => resolve({ width, height }),
        error => reject(error),
      );
    });
  };

  const getSize = async () => {
    const window = Dimensions.get('window');
    const percToInt = perc => parseInt(perc.replace('%', ''), 10) / 100;
    const input_width = typeof style.width === 'string' ? percToInt(style.width) * window.width : style.width;
    const input_height = typeof style.height === 'string' ? percToInt(style.height) * window.height : style.height;

    const source = props.name ? getSizeBySource(properties.source) : null;
    const uri = props.uri ? await getSizeByUri(properties.source.uri) : null;
    const dimensions = source || uri;

    if (!input_width && !input_height) {
      setWidth(dimensions.width);
      setHeight(dimensions.height);
    } else if (input_width && !input_height) {
      setWidth(input_width);
      setHeight(dimensions.height * (input_width / dimensions.width));
    } else if (!input_width && input_height) {
      setWidth(dimensions.width * (input_height / dimensions.height));
      setHeight(input_height);
    } else {
      setWidth(input_width);
      setHeight(input_height);
    }
  };

  getSize();

  return <RNImage {...properties} style={{ ...style, height, width }} />;
};

export default {
  Column,
  Row,
  Center,
  Absolute,
  SafeArea,
  Scroll,
  Animated,
  Image,
  Background,
  Animation,
  Touchable,
  KeyboardAvoid,
};
