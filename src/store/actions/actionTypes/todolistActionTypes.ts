import { addTodolistAC, getTodolistsAC } from 'store/actions';

export type TodolistActionType =
  | ReturnType<typeof getTodolistsAC>
  | ReturnType<typeof addTodolistAC>;
