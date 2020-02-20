import { createStore } from 'redux';
import Reducer from '~/reducers';
import Reactotron from '../../reactotron';

export default createStore(Reducer, Reactotron.createEnhancer());
