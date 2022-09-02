import { AppRootStateType } from 'store/store';
import { TodolistType } from 'types';

export const selectTodolists = (state: AppRootStateType): TodolistType[] =>
  state.todolists;
