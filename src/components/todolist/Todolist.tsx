import React, { ReactElement } from 'react';

import { useDispatch } from 'react-redux';

import { Button, Menu, SpanForChangeTitle } from 'components';
// @ts-ignore
import star from 'icons/star.svg';
import { isShowPopUpAC } from 'store/actions';
import {
  changeCompletedStatusTC,
  changeFavouriteStatusTC,
  changeTodolistTitleTC,
  deleteTodolistTC,
} from 'store/thunks';
import { TodolistPropsType } from 'types';
import './Todolist.css';

export const Todolist = ({
  id,
  text,
  isFavourite,
  isCompleted,
  isShowPopUp,
  isEdit,
}: TodolistPropsType): ReactElement => {
  const dispatch = useDispatch();

  // API Functions
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

  const handleShowMenu = (): void => {
    dispatch(isShowPopUpAC(id, true));
  };

  return (
    <div className="todolistWrapper" key={id}>
      {isFavourite ? (
        <>
          <div className="buttonStarWrapper">
            <button
              className="buttonStar"
              type="button"
              onClick={changeFavouriteStatusTodolist}
            >
              <img className="starImg" src={star} alt="favourite" />
            </button>
          </div>
          <SpanForChangeTitle
            isEdit={isEdit}
            title={text}
            onChange={changeTodolistTitle}
            isCompleted={isCompleted}
          />
        </>
      ) : (
        <>
          <div className="buttonStarWrapper" />
          <SpanForChangeTitle
            isEdit={isEdit}
            title={text}
            onChange={changeTodolistTitle}
            isCompleted={isCompleted}
          />
        </>
      )}
      <Button title="Menu" onClick={handleShowMenu} />
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
