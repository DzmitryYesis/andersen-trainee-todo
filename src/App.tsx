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
  //
  // const deleteTodolist = (id: string): void => {
  //   // @ts-ignore
  //   dispatch(deleteTodolistTC(id));
  // };
  //
  // const changeFavouriteStatusTodolist = (id: string, value: boolean): void => {
  //   // @ts-ignore
  //   dispatch(changeFavouriteStatusTC(id, !value));
  // };
  //
  // const changeCompletedStatusTodolist = (id: string, value: boolean): void => {
  //   // @ts-ignore
  //   dispatch(changeCompletedStatusTC(id, !value));
  // };
  //
  // const changeTodolistTitle = (id: string, newTitle: string): void => {
  //   // @ts-ignore
  //   dispatch(changeTodolistTitleTC(id, newTitle));
  // };

  useEffect(() => {
    fetch('https://6311e8fc19eb631f9d7b7f47.mockapi.io/todosYesis')
      .then(res => res.json())
      .then(data => dispatch(getTodolistsAC(data)));
  }, []);

  return (
    <div className="App">
      Todolist test 2
      <InputForAdd item={addTodolist} />
      {/* <button type="button" onClick={() => dispatch(isShowPopUpAC(true))}> */}
      {/*  Menu */}
      {/* </button> */}
      {state?.map(td => (
        <Todolist
          key={td.id}
          id={td.id}
          text={td.text}
          isFavourite={td.isFavourite}
          isCompleted={td.isCompleted}
          isShowPopUp={td.isShowPopUp}
        />
        // <div key={td.id}>
        //   {td.isFavourite ? (
        //     <>
        //       <img className="starImg" src={star} alt="favourite" />
        //       <SpanForChangeTitle
        //         title={td.text}
        //         onChange={changeTodolistTitle}
        //         isCompleted={td.isCompleted}
        //         id={td.id}
        //       />
        //     </>
        //   ) : (
        //     <SpanForChangeTitle
        //       title={td.text}
        //       onChange={changeTodolistTitle}
        //       isCompleted={td.isCompleted}
        //       id={td.id}
        //     />
        //   )}
        //   <button type="button" onClick={() => deleteTodolist(td.id)}>
        //     Delete
        //   </button>
        //   <button
        //     type="button"
        //     onClick={() => changeFavouriteStatusTodolist(td.id, td.isFavourite)}
        //   >
        //     Favourite
        //   </button>
        //   <button
        //     type="button"
        //     onClick={() => changeCompletedStatusTodolist(td.id, td.isCompleted)}
        //   >
        //     Completed
        //   </button>
        // </div>
      ))}
    </div>
  );
};

export default App;
