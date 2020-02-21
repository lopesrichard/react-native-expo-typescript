const resolve = function(props) {
  for (var prop in props) {
    if (this[prop]) {
      return this[prop];
    }
  }
};

export default {
  resolve: resolve,
  primary: { color: 'smoky', contrast: 'white', disabled: { color: 'gray', contrast: 'white' } },
  secondary: { color: 'blush', contrast: 'white', disabled: { color: 'gray', contrast: 'white' } },
  success: { color: 'puerto', contrast: 'white', disabled: { color: 'gray', contrast: 'white' } },
  warning: { color: 'apricot', contrast: 'white', disabled: { color: 'gray', contrast: 'white' } },
  info: { color: 'puerto', contrast: 'white', disabled: { color: 'gray', contrast: 'white' } },
  danger: { color: 'apricot', contrast: 'white', disabled: { color: 'gray', contrast: 'white' } },
  dark: { color: 'black', contrast: 'white', disabled: { color: 'gray', contrast: 'white' } },
  light: { color: 'white', contrast: 'black', disabled: { color: 'gray', contrast: 'white' } },
};
