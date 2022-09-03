import { ReactElement } from 'react';

import { useDispatch } from 'react-redux';

import { isShowPopUpAC } from 'store/actions';
import './Buttons.css';

type MenuAndButtonsPropsType = {
  id: string;
  deleteTodolist: () => void;
  changeFavouriteStatusTodolist: () => void;
  changeCompletedStatusTodolist: () => void;
};

export const Buttons = ({
  id,
  deleteTodolist,
  changeFavouriteStatusTodolist,
  changeCompletedStatusTodolist,
}: MenuAndButtonsPropsType): ReactElement => {
  const dispatch = useDispatch();
  return (
    <div className="menu">
      <button type="button" onClick={changeCompletedStatusTodolist}>
        In Work
      </button>
      <button type="button" onClick={changeFavouriteStatusTodolist}>
        Favourite
      </button>
      <button type="button">Edit</button>
      <button type="button" onClick={deleteTodolist}>
        Delete
      </button>
      <button type="button" onClick={() => dispatch(isShowPopUpAC(id, false))}>
        Cancel
      </button>
    </div>
  );
};
