import Reactotron from 'reactotron-react-native';
import { AsyncStorage } from 'react-native';
import { reactotronRedux } from 'reactotron-redux';

const tron = Reactotron.configure({ host: '192.168.0.20' })
  .setAsyncStorageHandler(AsyncStorage)
  .use(reactotronRedux())
  .useReactNative()
  .connect();

tron.clear();

console['tron'] = tron;
console.disableYellowBox = true;
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];

export default tron;
