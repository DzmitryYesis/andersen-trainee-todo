import React, { ReactElement } from 'react';

import { useDispatch } from 'react-redux';

import { Menu, SpanForChangeTitle } from 'components';
// @ts-ignore
import star from 'icons/star.svg';
import { isShowPopUpAC } from 'store/actions';
import {
  changeCompletedStatusTC,
  changeFavouriteStatusTC,
  changeTodolistTitleTC,
  deleteTodolistTC,
} from 'store/thunks';

type TodolistPropsType = {
  id: string;
  text: string;
  isFavourite: boolean;
  isCompleted: boolean;
  isShowPopUp: boolean;
  isEdit: boolean;
};

export const Todolist = ({
  id,
  text,
  isFavourite,
  isCompleted,
  isShowPopUp,
  isEdit,
}: TodolistPropsType): ReactElement => {
  const dispatch = useDispatch();

  const deleteTodolist = (): void => {
    // @ts-ignore
    dispatch(deleteTodolistTC(id));
  };

  const changeFavouriteStatusTodolist = (): void => {
    // @ts-ignore
    dispatch(changeFavouriteStatusTC(id, !isFavourite));
  };

  const changeCompletedStatusTodolist = (): void => {
    // @ts-ignore
    dispatch(changeCompletedStatusTC(id, !isCompleted));
  };

  const changeTodolistTitle = (newTitle: string): void => {
    // @ts-ignore
    dispatch(changeTodolistTitleTC(id, newTitle));
  };

  return (
    <div key={id}>
      {isFavourite ? (
        <>
          <button type="button" onClick={changeFavouriteStatusTodolist}>
            <img className="starImg" src={star} alt="favourite" />
          </button>
          <SpanForChangeTitle
            isEdit={isEdit}
            title={text}
            onChange={changeTodolistTitle}
            isCompleted={isCompleted}
          />
        </>
      ) : (
        <SpanForChangeTitle
          isEdit={isEdit}
          title={text}
          onChange={changeTodolistTitle}
          isCompleted={isCompleted}
        />
      )}
      <button type="button" onClick={() => dispatch(isShowPopUpAC(id, true))}>
        Menu
      </button>
      <Menu
        id={id}
        isShowPopUp={isShowPopUp}
        deleteTodolist={deleteTodolist}
        changeFavouriteStatusTodolist={changeFavouriteStatusTodolist}
        changeCompletedStatusTodolist={changeCompletedStatusTodolist}
      />
    </div>
  );
};
