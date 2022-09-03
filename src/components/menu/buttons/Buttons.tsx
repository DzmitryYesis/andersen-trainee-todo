import { ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'components';
import { isEditAC, isShowPopUpAC } from 'store/actions';
import './Buttons.css';
import { selectTodolists } from 'store/selectors';
import { MenuAndButtonsPropsType } from 'types';

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

  const isCompletedText = isCompleted ? 'Return to work' : 'Done';
  const isFavoriteText = isFavourite ? 'Remove from favorites' : 'Add to favorites';

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
      <Button title={isCompletedText} onClick={handleCompletedChange} />
      <Button title={isFavoriteText} onClick={handleFavouriteChange} />
      <Button title="Edit" onClick={handleEditTitle} />
      <Button title="Delete" onClick={deleteTodolist} />
      <Button title="Cancel" onClick={handleCancelMenu} />
    </div>
  );
};
