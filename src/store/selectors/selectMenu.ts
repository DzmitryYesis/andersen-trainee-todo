import { AppRootStateType } from 'store/store';

export const selectIsShowPopUp = (state: AppRootStateType): boolean =>
  state.menu.isShowPopUP;
