import { combineReducers } from 'redux';

import cards from '~/slices/cards';
import user from '~/slices/user';

export default combineReducers({ cards, user });
