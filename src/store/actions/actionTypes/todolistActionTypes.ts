import {
  addTodolistAC,
  changeCompletedStatusAC,
  changeFavouriteStatusAC,
  changeTodolistTitleAC,
  deleteTodolistAC,
  getTodolistsAC,
} from 'store/actions';

export type TodolistActionType =
  | ReturnType<typeof getTodolistsAC>
  | ReturnType<typeof addTodolistAC>
  | ReturnType<typeof deleteTodolistAC>
  | ReturnType<typeof changeFavouriteStatusAC>
  | ReturnType<typeof changeCompletedStatusAC>
  | ReturnType<typeof changeTodolistTitleAC>;
