import { ReactElement } from 'react';

import { useDispatch } from 'react-redux';

import { Button } from 'components';
import { isShowDeleteWindowAC } from 'store/actions';
import './DeleteWindow.css';
import { DeleteWindowPropsType } from 'types';

export const DeleteWindow = ({
  deleteTodolist,
  id,
}: DeleteWindowPropsType): ReactElement => {
  const dispatch = useDispatch();

  return (
    <div className="delete">
      <Button title="Cancel" onClick={() => dispatch(isShowDeleteWindowAC(id, false))} />
      <Button title="Yes, Delete" onClick={deleteTodolist} />
    </div>
  );
};
