import { ReactElement } from 'react';

import ReactDOM from 'react-dom';

import { Buttons } from 'components';
import { MenuAndButtonsPropsType } from 'types';

export const Menu = ({
  id,
  isShowPopUp,
  deleteTodolist,
  changeFavouriteStatusTodolist,
  changeCompletedStatusTodolist,
}: MenuAndButtonsPropsType): ReactElement | null => {
  const portal = document.getElementById('menu');
  if (portal && isShowPopUp) {
    return ReactDOM.createPortal(
      <Buttons
        id={id}
        deleteTodolist={deleteTodolist}
        changeFavouriteStatusTodolist={changeFavouriteStatusTodolist}
        changeCompletedStatusTodolist={changeCompletedStatusTodolist}
      />,
      portal,
    );
  }
  return null;
};
