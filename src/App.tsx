import React, { ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// @ts-ignore
import star from './icons/star.svg';

import './App.css';

import { InputForAdd, Menu } from 'components';
import { getTodolistsAC, isShowPopUpAC } from 'store/actions';
import { selectTodolists } from 'store/selectors';
import { addTodolistTC, deleteTodolistTC, changeFavouriteStatusTC } from 'store/thunks';

const App = (): ReactElement => {
  const dispatch = useDispatch();
  const state = useSelector(selectTodolists);

  const addTodolist = (newTitle: string): void => {
    // @ts-ignore
    dispatch(addTodolistTC(newTitle));
  };

  const deleteTodolist = (id: string): void => {
    // @ts-ignore
    dispatch(deleteTodolistTC(id));
  };

  const changeFavouriteStatusTodolist = (id: string, value: boolean): void => {
    // @ts-ignore
    dispatch(changeFavouriteStatusTC(id, !value));
  };

  useEffect(() => {
    fetch('https://6311e8fc19eb631f9d7b7f47.mockapi.io/todosYesis')
      .then(res => res.json())
      .then(data => dispatch(getTodolistsAC(data)));
  }, []);

  return (
    <div className="App">
      Todolist test 2
      <InputForAdd item={addTodolist} />
      <button type="button" onClick={() => dispatch(isShowPopUpAC(true))}>
        Menu
      </button>
      {state?.map(td => (
        <div key={td.id}>
          {td.isFavourite ? (
            <>
              <img className="starImg" src={star} alt="favourite" />
              <span>{td.text}</span>
            </>
          ) : (
            <span>{td.text}</span>
          )}
          <button type="button" onClick={() => deleteTodolist(td.id)}>
            Delete
          </button>
          <button
            type="button"
            onClick={() => changeFavouriteStatusTodolist(td.id, td.isFavourite)}
          >
            Favourite
          </button>
        </div>
      ))}
      <div>
        <Menu />
      </div>
    </div>
  );
};

export default App;
