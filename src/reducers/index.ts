import { combineReducers, Reducer } from 'redux';

import { Store as StoreState } from '../global';
import { player } from '../reducers/player';

const rootReducers: Reducer<StoreState.All> = combineReducers({ player });

export default rootReducers;