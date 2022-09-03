import {
  ADD_TODOLIST,
  AllAppActionType,
  CHANGE_COMPLETED_STATUS,
  CHANGE_FAVOURITE_STATUS,
  CHANGE_TODOLIST_TITLE,
  DELETE_TODOLIST,
  GET_TODOLISTS,
  IS_SHOW_POP_UP,
} from 'store/actions';
import { TodolistDomainType } from 'types';

const initialState: TodolistDomainType[] = [];

export const todolistReducer = (
  state: TodolistDomainType[] = initialState,
  action: AllAppActionType,
): TodolistDomainType[] => {
  switch (action.type) {
    case GET_TODOLISTS:
      return action.payload.todolists.map(td => ({ ...td, isShowPopUp: false }));
    case ADD_TODOLIST:
      return [...state, { ...action.payload.todolist, isShowPopUp: false }];
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
    case CHANGE_TODOLIST_TITLE:
      return state.map(td =>
        td.id === action.payload.id ? { ...td, text: action.payload.value } : td,
      );
    case IS_SHOW_POP_UP:
      return state.map(td =>
        td.id === action.payload.id ? { ...td, isShowPopUp: action.payload.value } : td,
      );
    default:
      return state;
  }
};
