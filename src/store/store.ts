import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { todolistReducer, menuReducer } from 'store/reducers';

const rootReducer = combineReducers({
  todolists: todolistReducer,
  menu: menuReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>;
