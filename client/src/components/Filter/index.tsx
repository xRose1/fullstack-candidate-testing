import React from 'react';
import './styles.css';

const FilterItem = (props: any) => {

  const {data} = props;

  return (
    <div>
      <label className="filter-title">{data.key}</label>
      <label className="filter-count">{data.doc_count}</label>
    </div>
  );
}

export default FilterItem;