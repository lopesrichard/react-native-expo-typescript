import { combineReducers } from 'redux';

import cards from '~/slices/cards';
import user from '~/slices/user';

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({ cards, user });
