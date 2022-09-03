import { AppRootStateType } from 'store/store';
import { FilterType } from 'types';

export const selectFilter = (state: AppRootStateType): FilterType => state.filter.filter;
