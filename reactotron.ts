import ReactotronReactNative from 'reactotron-react-native';
import { AsyncStorage } from 'react-native';
import { reactotronRedux } from 'reactotron-redux';

export const Reactotron = ReactotronReactNative.configure({ host: '192.168.0.20' })
  .setAsyncStorageHandler(AsyncStorage)
  .use(reactotronRedux())
  .useReactNative()
  .connect();

Reactotron.clear();

console['tron'] = Reactotron;
console.disableYellowBox = true;
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
