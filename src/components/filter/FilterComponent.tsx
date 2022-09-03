import { ReactElement } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import './FilterComponent.css';
import { Button } from 'components';
import { Filter } from 'enum/Filter';
import { changeFilterAC } from 'store/actions';
import { selectFilter } from 'store/selectors';

export const FilterComponent = (): ReactElement => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const styleForAll = filter === Filter.ALL;
  const styleForCompleted = filter === Filter.COMPLETED;
  const styleForFavorite = filter === Filter.FAVORITE;
  const styleForInWork = filter === Filter.INWORK;

  const handleFilterAll = (): void => {
    dispatch(changeFilterAC(Filter.ALL));
  };
  const handleFilterCompleted = (): void => {
    dispatch(changeFilterAC(Filter.COMPLETED));
  };
  const handleFilterInWork = (): void => {
    dispatch(changeFilterAC(Filter.INWORK));
  };
  const handleFilterFavorite = (): void => {
    dispatch(changeFilterAC(Filter.FAVORITE));
  };

  return (
    <div className="filterComponentWrapper">
      <Button title="ALL" onClick={handleFilterAll} style={styleForAll} />
      <Button
        title="COMPLETED"
        onClick={handleFilterCompleted}
        style={styleForCompleted}
      />
      <Button title="IN WORK" onClick={handleFilterInWork} style={styleForInWork} />
      <Button title="FAVORITE" onClick={handleFilterFavorite} style={styleForFavorite} />
    </div>
  );
};
