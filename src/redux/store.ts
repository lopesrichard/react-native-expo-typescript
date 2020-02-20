import { configureStore } from '@reduxjs/toolkit';
import reducer from '~/redux/reducer';
import Reactotron from '../../reactotron';

export default configureStore({
  reducer,
  enhancers: [Reactotron.createEnhancer()],
});
