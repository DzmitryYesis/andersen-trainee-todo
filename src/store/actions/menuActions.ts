export const IS_SHOW_POP_UP = 'MENU/IS-SHOW-POP-UP';

export const isShowPopUpAC = (value: boolean) =>
  ({
    type: IS_SHOW_POP_UP,
    payload: {
      value,
    },
  } as const);
