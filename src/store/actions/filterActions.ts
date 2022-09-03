import { FilterType } from 'types';

export const CHANGE_FILTER = 'FILTER/CHANGE-FILTER';

export const changeFilterAC = (value: FilterType) =>
  ({
    type: CHANGE_FILTER,
    payload: {
      value,
    },
  } as const);
