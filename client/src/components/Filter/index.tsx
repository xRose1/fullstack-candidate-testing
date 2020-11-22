import React from 'react';
import './styles.css';

const FilterItem = (props: any): any => {

  const { data } = props;

  return (
    <div>
      <label className="filter-title ml-2">{data.key}</label>
      <label className="filter-count ml-2">{data.doc_count}</label>
    </div>
  );
}

export default FilterItem;