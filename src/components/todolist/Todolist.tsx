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
};

export const Todolist = ({
  id,
  text,
  isFavourite,
  isCompleted,
  isShowPopUp,
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
          <img className="starImg" src={star} alt="favourite" />
          <SpanForChangeTitle
            title={text}
            onChange={changeTodolistTitle}
            isCompleted={isCompleted}
          />
        </>
      ) : (
        <SpanForChangeTitle
          title={text}
          onChange={changeTodolistTitle}
          isCompleted={isCompleted}
        />
      )}
      <button type="button" onClick={() => dispatch(isShowPopUpAC(id, true))}>
        Menu
      </button>
      {/* <button type="button" onClick={() => deleteTodolist(id)}> */}
      {/*  Delete */}
      {/* </button> */}
      {/* <button */}
      {/*  type="button" */}
      {/*  onClick={() => changeFavouriteStatusTodolist(id, isFavourite)} */}
      {/* > */}
      {/*  Favourite */}
      {/* </button> */}
      {/* <button */}
      {/*  type="button" */}
      {/*  onClick={() => changeCompletedStatusTodolist(id, isCompleted)} */}
      {/* > */}
      {/*  Completed */}
      {/* </button> */}
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