import { MaskService } from 'react-native-masked-text';

export default (type, value) => {
  switch (type) {
    case 'cpf':
      return MaskService.toMask('cpf', value);
    case 'date':
      return MaskService.toMask('datetime', value, { format: 'MM/DD/YYYY' });
  }
};
