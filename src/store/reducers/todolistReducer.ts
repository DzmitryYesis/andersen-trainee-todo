import {
  ADD_TODOLIST,
  AllAppActionType,
  DELETE_TODOLIST,
  GET_TODOLISTS,
} from 'store/actions';
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
    case DELETE_TODOLIST:
      return state.filter(td => td.id !== action.payload.id);
    default:
      return state;
  }
};
