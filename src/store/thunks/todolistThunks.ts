import { Dispatch } from 'redux';

import {
  addTodolistAC,
  AllAppActionType,
  changeCompletedStatusAC,
  changeFavouriteStatusAC,
  changeTodolistTitleAC,
  deleteTodolistAC,
} from 'store/actions';

export const addTodolistTC =
  (title: string) => (dispatch: Dispatch<AllAppActionType>) => {
    fetch('https://6311e8fc19eb631f9d7b7f47.mockapi.io/todosYesis', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: title }),
    })
      .then(res => res.json())
      .then(data => {
        dispatch(addTodolistAC(data));
      });
  };

export const deleteTodolistTC =
  (id: string) => (dispatch: Dispatch<AllAppActionType>) => {
    fetch(`https://6311e8fc19eb631f9d7b7f47.mockapi.io/todosYesis/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => dispatch(deleteTodolistAC(data.id)));
  };

export const changeFavouriteStatusTC =
  (id: string, value: boolean) => (dispatch: Dispatch<AllAppActionType>) => {
    fetch(`https://6311e8fc19eb631f9d7b7f47.mockapi.io/todosYesis/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isFavourite: value }),
    })
      .then(res => res.json())
      .then(data => {
        dispatch(changeFavouriteStatusAC(data.id, data.isFavourite));
      });
  };

export const changeCompletedStatusTC =
  (id: string, value: boolean) => (dispatch: Dispatch<AllAppActionType>) => {
    fetch(`https://6311e8fc19eb631f9d7b7f47.mockapi.io/todosYesis/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isCompleted: value }),
    })
      .then(res => res.json())
      .then(data => {
        dispatch(changeCompletedStatusAC(data.id, data.isCompleted));
      });
  };

export const changeTodolistTitleTC =
  (id: string, value: string) => (dispatch: Dispatch<AllAppActionType>) => {
    fetch(`https://6311e8fc19eb631f9d7b7f47.mockapi.io/todosYesis/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: value }),
    })
      .then(res => res.json())
      .then(data => {
        dispatch(changeTodolistTitleAC(data.id, data.text));
      });
  };
