import themes from '~/util/themes';

const parse = function(color: string) {
  return this[color] || this[themes.resolve({ [color]: true })?.color] || color;
};

export default {
  parse: parse,
  smoky: '#65587f',
  blush: '#e85f99',
  puerto: '#50bda1',
  apricot: '#f18867',
  black: '#111111',
  white: '#FFFFFF',
  gray: '#DADADA',
};
