import {
  ADD_TODOLIST,
  AllAppActionType,
  CHANGE_COMPLETED_STATUS,
  CHANGE_FAVOURITE_STATUS,
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
    case CHANGE_FAVOURITE_STATUS:
      return state.map(td =>
        td.id === action.payload.id ? { ...td, isFavourite: action.payload.value } : td,
      );
    case CHANGE_COMPLETED_STATUS:
      return state.map(td =>
        td.id === action.payload.id ? { ...td, isCompleted: action.payload.value } : td,
      );
    default:
      return state;
  }
};
