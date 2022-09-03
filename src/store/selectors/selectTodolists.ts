import { AppRootStateType } from 'store/store';
import { TodolistDomainType } from 'types';

export const selectTodolists = (state: AppRootStateType): TodolistDomainType[] =>
  state.todolists;
