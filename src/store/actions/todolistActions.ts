import { TodolistType } from 'types';

export const GET_TODOLISTS = 'TODOLISTS/GET-TODOLISTS';
export const ADD_TODOLIST = 'TODOLISTS/ADD-TODOLIST';
export const DELETE_TODOLIST = 'TODOLISTS/DELETE-TODOLIST';

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
