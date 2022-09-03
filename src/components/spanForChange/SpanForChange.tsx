import React, { ChangeEvent, ReactElement, useState } from 'react';

type SpanChangeTitlePropsType = {
  title: string;
  onChange: (newTitle: string) => void;
  isCompleted: boolean;
};

export const SpanForChangeTitle = ({
  title,
  onChange,
  isCompleted,
}: SpanChangeTitlePropsType): ReactElement => {
  const [editMode, setEditMode] = useState<boolean>(true);
  const [newTitle, setNewTitle] = useState(title);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewTitle(e.currentTarget.value);
  };

  const addNewTitle = (): void => {
    onChange(newTitle);
    setEditMode(!editMode);
  };

  return editMode ? (
    <span
      className={isCompleted ? 'is-done' : ''}
      onDoubleClick={() => setEditMode(!editMode)}
    >
      {newTitle}
    </span>
  ) : (
    <input value={newTitle} onChange={onChangeHandler} onBlur={addNewTitle} />
  );
};
