import { combineReducers } from 'redux';
import reducer from './reducer';

export default function createReducer(asyncReducers) {
  const appReducer = combineReducers({
    signUp: reducer,
    // write synchronous reducers above this line
    ...asyncReducers,
  });

  return (state, action) => appReducer(state, action);
}
