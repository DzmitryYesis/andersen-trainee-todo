export type InputForAddPropsType = {
  item: (newTitle: string) => void;
};

export type ButtonTypeProps = {
  title: string;
  onClick: () => void;
  style?: boolean;
};

export type TodolistPropsType = {
  id: string;
  text: string;
  isFavourite: boolean;
  isCompleted: boolean;
  isShowPopUp: boolean;
  isEdit: boolean;
};

export type SpanChangeTitlePropsType = {
  isEdit: boolean;
  title: string;
  onChange: (newTitle: string) => void;
  isCompleted: boolean;
};

export type MenuAndButtonsPropsType = {
  id: string;
  isShowPopUp?: boolean;
  deleteTodolist: () => void;
  changeFavouriteStatusTodolist: () => void;
  changeCompletedStatusTodolist: () => void;
};

export type DeletePortalPropsType = {
  isShowDeleteWindow: boolean;
  deleteTodolist: () => void;
  id: string;
};

export type DeleteWindowPropsType = {
  deleteTodolist: () => void;
  id: string;
};
