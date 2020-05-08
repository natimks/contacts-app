import React from 'react';

function isSelected(filterKey, sort) {
  return sort.selectedSort === filterKey;
}

function getDownUpIcon({ asc }, isSelected) {
  if (!isSelected) return 'down';
  return asc ? 'down' : 'up';
}

const defaultSort = {
  selectedSort: 'name',
  asc: true,
};

function SimpleFilter(props) {
  const sort = props.sort ? props.sort : defaultSort;
  const isSelectedFilter = isSelected(props.filterKey, sort);
  const classNameSelected = isSelectedFilter ? 'is-selected' : '';
  return (
    <button
      className={`filters__item ${classNameSelected}`}
      onClick={props.onSort}
      name={props.filterKey}
    >
      {props.name}
      <i className={`fas fa-sort-${getDownUpIcon(sort, isSelectedFilter)}`} />
    </button>
  );
}

export default SimpleFilter;
