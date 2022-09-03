import { ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { isEditAC, isShowPopUpAC } from 'store/actions';
import './Buttons.css';
import { selectTodolists } from 'store/selectors';

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
  // @ts-ignore
  const { isCompleted, isFavourite } = useSelector(selectTodolists).find(
    td => td.id === id,
  );

  const handleEditTitle = (): void => {
    dispatch(isEditAC(id, true));
    dispatch(isShowPopUpAC(id, false));
  };

  const handleCompletedChange = (): void => {
    changeCompletedStatusTodolist();
    dispatch(isShowPopUpAC(id, false));
  };

  const handleFavouriteChange = (): void => {
    changeFavouriteStatusTodolist();
    dispatch(isShowPopUpAC(id, false));
  };

  const handleCancelMenu = (): void => {
    dispatch(isShowPopUpAC(id, false));
  };

  return (
    <div className="menu">
      <button type="button" onClick={handleCompletedChange}>
        {isCompleted ? 'Return to work' : 'Done'}
      </button>
      <button type="button" onClick={handleFavouriteChange}>
        {isFavourite ? 'Remove from favorites' : 'Add to favorites'}
      </button>
      <button type="button" onClick={handleEditTitle}>
        Edit
      </button>
      <button type="button" onClick={deleteTodolist}>
        Delete
      </button>
      <button type="button" onClick={handleCancelMenu}>
        Cancel
      </button>
    </div>
  );
};
