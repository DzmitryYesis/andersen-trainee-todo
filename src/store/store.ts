import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { todolistReducer, filterReducer } from 'store/reducers';

const rootReducer = combineReducers({
  todolists: todolistReducer,
  filter: filterReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>;
