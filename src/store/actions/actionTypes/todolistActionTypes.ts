import { addTodolistAC, deleteTodolistAC, getTodolistsAC } from 'store/actions';

export type TodolistActionType =
  | ReturnType<typeof getTodolistsAC>
  | ReturnType<typeof addTodolistAC>
  | ReturnType<typeof deleteTodolistAC>;
