import { ReactElement } from 'react';

import ReactDOM from 'react-dom';

import { DeleteWindow } from './deleteWindow';

import { DeletePortalPropsType } from 'types';

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
