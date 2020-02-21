import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

import React from 'react';

import colors from '~/util/colors';

export default function Icon(props) {
  const properties = { ...props, color: props.color ? colors.parse(props.color) : undefined };
  const vendor = props.vendor || 'fontawesome';
  switch (vendor.toLowerCase()) {
    case 'material':
      return <MaterialCommunityIcons {...properties} />;
    case 'fontawesome':
      return <FontAwesome5 {...properties} />;
  }
}
