import { AllAppActionType, IS_SHOW_POP_UP } from 'store/actions';
import { MenuType } from 'types';

const initialState: MenuType = {
  isShowPopUP: false,
};

export const menuReducer = (
  state: MenuType = initialState,
  action: AllAppActionType,
): MenuType => {
  switch (action.type) {
    case IS_SHOW_POP_UP:
      return { ...state, isShowPopUP: action.payload.value };
    default:
      return state;
  }
};
