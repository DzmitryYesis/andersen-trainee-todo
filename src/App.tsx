import React, { ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import './App.css';

import { FilterComponent, InputForAdd, Todolist } from 'components';
import { Filter } from 'enum/Filter';
import { getTodolistsAC } from 'store/actions';
import { selectFilter, selectTodolists } from 'store/selectors';
import { addTodolistTC } from 'store/thunks';

const App = (): ReactElement => {
  const dispatch = useDispatch();
  let todolists = useSelector(selectTodolists);
  const filter = useSelector(selectFilter);

  const addTodolist = (newTitle: string): void => {
    // @ts-ignore
    dispatch(addTodolistTC(newTitle));
  };

  if (filter === Filter.COMPLETED) {
    todolists = todolists.filter(td => td.isCompleted);
  }
  if (filter === Filter.INWORK) {
    todolists = todolists.filter(td => !td.isCompleted);
  }
  if (filter === Filter.FAVORITE) {
    todolists = todolists.filter(td => td.isFavourite);
  }

  useEffect(() => {
    fetch('https://6311e8fc19eb631f9d7b7f47.mockapi.io/todosYesis')
      .then(res => res.json())
      .then(data => dispatch(getTodolistsAC(data)));
  }, []);

  return (
    <div className="App">
      Todolist test 2
      <InputForAdd item={addTodolist} />
      <div className="todolistFilterBlock">
        <FilterComponent />
        {todolists?.map(td => (
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
    </div>
  );
};

export default App;
