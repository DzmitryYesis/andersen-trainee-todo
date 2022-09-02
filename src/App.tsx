import React, { ReactElement, useEffect, useState } from 'react';

import './App.css';

type DataType = {
  text: string;
  isFavourite: boolean;
  isCompleted: boolean;
  id: string;
};

const App = (): ReactElement => {
  const [state, setState] = useState<DataType[]>();

  useEffect(() => {
    fetch('https://6311e8fc19eb631f9d7b7f47.mockapi.io/todosYesis')
      .then(res => res.json())
      .then(data => setState(data));
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
