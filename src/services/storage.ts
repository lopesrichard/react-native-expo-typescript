import { AsyncStorage } from 'react-native';

export const save = async (key: string, item: any): Promise<void> => {
  await AsyncStorage.setItem(key, JSON.stringify(item));
};

export const load = async (key: string): Promise<any> => {
  return JSON.parse(await AsyncStorage.getItem(key));
};

export const remove = async (key: string): Promise<void> => {
  await AsyncStorage.removeItem(key);
};
