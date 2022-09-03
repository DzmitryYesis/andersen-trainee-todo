import { ChangeEvent, ReactElement, useState, KeyboardEvent } from 'react';

import { Button } from 'components';
import './InputForAdd.css';
import { InputForAddPropsType } from 'types';

const CHAR_CODE = 13;
const LIMIT = 5;

export const InputForAdd = ({ item }: InputForAddPropsType): ReactElement => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState<string | null>(null);

  const addTaskHandler = (): void => {
    if (title.trim() !== '') {
      item(title);
      setTitle('');
    } else {
      setError('Incorrect title');
    }
  };

  const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.currentTarget.value);
    if (error !== null) {
      setError(null);
    } else if (title.length > LIMIT) {
      setError(`Exceeded text limit on ${Math.abs(LIMIT - title.length)} characters`);
    }
  };

  const addTaskOnKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (title.trim() !== '') {
      if (e.charCode === CHAR_CODE) {
        item(title);
        setTitle('');
      }
    } else {
      setError('Incorrect title');
    }
  };

  return (
    <div>
      <div>
        <input
          className="inputForAdd"
          value={title}
          onChange={onChangeTitleHandler}
          onKeyPress={addTaskOnKeyPressHandler}
        />
        <Button title="Add" onClick={addTaskHandler} />
      </div>
      <div className="errorDiv">{error}</div>
    </div>
  );
};
