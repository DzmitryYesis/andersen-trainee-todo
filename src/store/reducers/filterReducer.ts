import { Filter } from 'enum/Filter';
import { AllAppActionType, CHANGE_FILTER } from 'store/actions';
import { FilterReducerType } from 'types';

const initialState: FilterReducerType = {
  filter: Filter.ALL,
};

export const filterReducer = (
  state: FilterReducerType = initialState,
  action: AllAppActionType,
): FilterReducerType => {
  switch (action.type) {
    case CHANGE_FILTER:
      return { ...state, filter: action.payload.value };
    default:
      return state;
  }
};
