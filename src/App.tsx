import React, { ReactElement, useEffect } from 'react';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import { getTodolistsAC } from 'store/actions';
import { selectTodolists } from 'store/selectors';

const App = (): ReactElement => {
  const dispatch = useDispatch();
  const state = useSelector(selectTodolists);

  useEffect(() => {
    fetch('https://6311e8fc19eb631f9d7b7f47.mockapi.io/todosYesis')
      .then(res => res.json())
      .then(data => dispatch(getTodolistsAC(data)));
  }, []);

  return (
    <div className="App">
      Todolist test 2
      {state?.map(td => (
        <div key={td.id}>
          <span>{td.text}</span>
        </div>
      ))}
    </div>
  );
};

export default App;
