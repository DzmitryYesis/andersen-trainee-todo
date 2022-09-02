import { ChangeEvent, ReactElement, useState, KeyboardEvent } from 'react';

type InputForAddPropsType = {
  item: (newTitle: string) => void;
};

const CHAR_CODE = 13;

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
    if (error !== null) {
      setError(null);
    }
    setTitle(e.currentTarget.value);
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
      <input
        value={title}
        onChange={onChangeTitleHandler}
        onKeyPress={addTaskOnKeyPressHandler}
      />
      <button onClick={addTaskHandler} type="button">
        Add
      </button>
      {title}
    </div>
  );
};
