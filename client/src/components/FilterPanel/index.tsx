import React from 'react';
import FilterItem from '../Filter';
import { Filter } from '../../store/modules/repositories/types';
import './styles.css';

const FilterPanel = (props: any): any => {
  const { data, title, onShowMore } = props;

  return (
    <div>
      <div className="border border-gray-50 bg-white mt-3 p-3">
        <h6 className="filter-type-title mt-1 mb-3 ml-2">{title}</h6>
        {
          data.slice(0, 10).map((item: Filter): any => <FilterItem data={item} key={item.key} />)
        }

        {
          data.length > 10 && (
            <span className="more ml-2" onClick={(): any => onShowMore({
              title,
              filters: data,
            })}>Show more</span>
          )
        }
      </div>
    </div>
  );
};

export default FilterPanel;
