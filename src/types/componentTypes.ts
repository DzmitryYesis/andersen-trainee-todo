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
