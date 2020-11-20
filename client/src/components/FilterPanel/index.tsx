import React, { Component } from 'react';
import FilterItem from '../Filter';
import { Filter } from '../../store/modules/repositories/types';
import './styles.css';

class FilterPanel extends Component<{data: [], title: string, onShowMore: any}> {
  componentDidMount() {}

  render() {
    const {data, title, onShowMore} = this.props;
    return (
      <div>
        <div className="border border-gray-50 bg-white mt-3 p-3">
          <h6 className="filter-type-title">{title}</h6>
          {
            data.slice(0, 10).map((item: Filter) => <FilterItem data={item} key={item.key} />)
          }

          {
            data.length > 10 && (
              <span className="more" onClick={() => onShowMore({
                title,
                filters: data
              })}>Show more</span>
            )
          }
        </div>
      </div>
    );
  }
}

export default FilterPanel;