import { combineReducers } from 'redux';

import { reducer as cards } from './slices/cards';
import { reducer as user } from './slices/user';

export default combineReducers({ cards, user });
