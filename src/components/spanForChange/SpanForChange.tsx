import React, { ChangeEvent, KeyboardEvent, ReactElement, useState } from 'react';

import { SpanChangeTitlePropsType } from 'types';

const CHAR_CODE = 13;

export const SpanForChangeTitle = ({
  isEdit,
  title,
  onChange,
  isCompleted,
}: SpanChangeTitlePropsType): ReactElement => {
  const [newTitle, setNewTitle] = useState(title);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewTitle(e.currentTarget.value);
  };

  const addTaskOnKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.charCode === CHAR_CODE) {
      onChange(newTitle);
    }
  };
  return !isEdit ? (
    <span className={isCompleted ? 'is-done' : ''}>{newTitle}</span>
  ) : (
    <input
      value={newTitle}
      onChange={onChangeHandler}
      onKeyPress={addTaskOnKeyPressHandler}
    />
  );
};
