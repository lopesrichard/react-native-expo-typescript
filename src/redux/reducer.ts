import { combineReducers } from 'redux';
import { reducer } from './cards';

export default combineReducers({ cards: reducer });
