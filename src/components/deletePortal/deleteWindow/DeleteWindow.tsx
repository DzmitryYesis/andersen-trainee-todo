import { ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'components';
import { isShowDeleteWindowAC } from 'store/actions';
import './DeleteWindow.css';
import { selectTodolists } from 'store/selectors';
import { DeleteWindowPropsType } from 'types';

export const DeleteWindow = ({
  deleteTodolist,
  id,
}: DeleteWindowPropsType): ReactElement => {
  const dispatch = useDispatch();
  // @ts-ignore
  const { text } = useSelector(selectTodolists).find(td => td.id === id);

  const handleCloseDeleteWindow = (): void => {
    dispatch(isShowDeleteWindowAC(id, false));
  };

  return (
    <div className="delete">
      <button className="buttonX" type="button" onClick={handleCloseDeleteWindow}>
        X
      </button>
      <p>Do you really want to delete the task?</p>
      <p>{text}</p>
      <div>
        <Button title="Cancel" onClick={handleCloseDeleteWindow} />
        <Button title="Yes, Delete" onClick={deleteTodolist} />
      </div>
    </div>
  );
};
