import { ADD_TODOLIST, AllAppActionType, GET_TODOLISTS } from 'store/actions';
import { TodolistType } from 'types';

const initialState: TodolistType[] = [];

export const todolistReducer = (
  state: TodolistType[] = initialState,
  action: AllAppActionType,
): TodolistType[] => {
  switch (action.type) {
    case GET_TODOLISTS:
      return [...state, ...action.payload.todolists];
    case ADD_TODOLIST:
      return [...state, action.payload.todolist];
    default:
      return state;
  }
};
