import { ReactElement } from 'react';

import ReactDOM from 'react-dom';

import { DeleteWindow } from './deleteWindow';

export type DeletePortalPropsType = {
  isShowDeleteWindow: boolean;
  deleteTodolist: () => void;
  id: string;
};

export const DeletePortal = ({
  isShowDeleteWindow,
  deleteTodolist,
  id,
}: DeletePortalPropsType): ReactElement | null => {
  const portal = document.getElementById('delete');
  if (portal && isShowDeleteWindow) {
    return ReactDOM.createPortal(
      <DeleteWindow deleteTodolist={deleteTodolist} id={id} />,
      portal,
    );
  }
  return null;
};
