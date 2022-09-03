export type TodolistType = {
  text: string;
  isFavourite: boolean;
  isCompleted: boolean;
  id: string;
};

export type TodolistDomainType = TodolistType & {
  isShowPopUp: boolean;
};
