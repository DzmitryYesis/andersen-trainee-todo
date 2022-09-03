import { Filter } from 'enum/Filter';

export type FilterReducerType = {
  filter: FilterType;
};

export type FilterType = Filter.ALL | Filter.COMPLETED | Filter.FAVORITE | Filter.INWORK;
