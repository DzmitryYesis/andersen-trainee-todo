import { TodolistType } from 'types';

export const GET_TODOLISTS = 'TODOLISTS/GET-TODOLISTS';
export const ADD_TODOLIST = 'TODOLISTS/ADD-TODOLIST';
export const DELETE_TODOLIST = 'TODOLISTS/DELETE-TODOLIST';
export const CHANGE_FAVOURITE_STATUS = 'TODOLISTS/CHANGE-FAVOURITE-STATUS';
export const CHANGE_COMPLETED_STATUS = 'TODOLISTS/CHANGE-COMPLETED-STATUS';
export const CHANGE_TODOLIST_TITLE = 'TODOLISTS/CHANGE-TODOLIST-TITLE';
export const IS_SHOW_POP_UP = 'TODOLISTS/IS-SHOW-POP-UP';
export const IS_EDIT = 'TODOLISTS/IS-EDIT';
export const IS_SHOW_DELETE_WINDOW = 'TODOLISTS/IS-SHOW-DELETE-WINDOW';

export const getTodolistsAC = (todolists: TodolistType[]) =>
  ({
    type: GET_TODOLISTS,
    payload: {
      todolists,
    },
  } as const);

export const addTodolistAC = (todolist: TodolistType) =>
  ({
    type: ADD_TODOLIST,
    payload: {
      todolist,
    },
  } as const);

export const deleteTodolistAC = (id: string) =>
  ({
    type: DELETE_TODOLIST,
    payload: {
      id,
    },
  } as const);

export const changeFavouriteStatusAC = (id: string, value: boolean) =>
  ({
    type: CHANGE_FAVOURITE_STATUS,
    payload: {
      id,
      value,
    },
  } as const);

export const changeCompletedStatusAC = (id: string, value: boolean) =>
  ({
    type: CHANGE_COMPLETED_STATUS,
    payload: {
      id,
      value,
    },
  } as const);

export const changeTodolistTitleAC = (id: string, value: string) =>
  ({
    type: CHANGE_TODOLIST_TITLE,
    payload: {
      id,
      value,
    },
  } as const);

export const isShowPopUpAC = (id: string, value: boolean) =>
  ({
    type: IS_SHOW_POP_UP,
    payload: {
      id,
      value,
    },
  } as const);

export const isEditAC = (id: string, value: boolean) =>
  ({
    type: IS_EDIT,
    payload: {
      id,
      value,
    },
  } as const);

export const isShowDeleteWindowAC = (id: string, value: boolean) =>
  ({
    type: IS_SHOW_DELETE_WINDOW,
    payload: {
      id,
      value,
    },
  } as const);
