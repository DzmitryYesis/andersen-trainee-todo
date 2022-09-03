import React, { ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import './App.css';

import { InputForAdd, Todolist } from 'components';
import { getTodolistsAC } from 'store/actions';
import { selectTodolists } from 'store/selectors';
import { addTodolistTC } from 'store/thunks';

const App = (): ReactElement => {
  const dispatch = useDispatch();
  const state = useSelector(selectTodolists);

  const addTodolist = (newTitle: string): void => {
    // @ts-ignore
    dispatch(addTodolistTC(newTitle));
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
      {state?.map(td => (
        <Todolist
          key={td.id}
          id={td.id}
          text={td.text}
          isFavourite={td.isFavourite}
          isCompleted={td.isCompleted}
          isShowPopUp={td.isShowPopUp}
          isEdit={td.isEdit}
        />
      ))}
    </div>
  );
};

export default App;
