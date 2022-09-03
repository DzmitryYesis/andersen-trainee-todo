import {
  addTodolistAC,
  changeCompletedStatusAC,
  changeFavouriteStatusAC,
  deleteTodolistAC,
  getTodolistsAC,
} from 'store/actions';

export type TodolistActionType =
  | ReturnType<typeof getTodolistsAC>
  | ReturnType<typeof addTodolistAC>
  | ReturnType<typeof deleteTodolistAC>
  | ReturnType<typeof changeFavouriteStatusAC>
  | ReturnType<typeof changeCompletedStatusAC>;
