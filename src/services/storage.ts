import { AsyncStorage } from 'react-native';

export default {
  save: async (key: string, item: any): Promise<void> => {
    await AsyncStorage.setItem(key, JSON.stringify(item));
  },
  load: async (key: string): Promise<any> => {
    return JSON.parse(await AsyncStorage.getItem(key));
  },
  remove: async (key: string): Promise<void> => {
    await AsyncStorage.removeItem(key);
  }
};
