import { Dispatch } from 'redux';

import { addTodolistAC, AllAppActionType, deleteTodolistAC } from 'store/actions';

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
      // headers: {
      //   Accept: 'application/json, text/plain, */*',
      //   'Content-Type': 'application/json',
      // },
      // body: JSON.stringify({ text: title }),
    })
      .then(res => res.json())
      .then(data => {
        dispatch(deleteTodolistAC(data.id));
      });
  };
