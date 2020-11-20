import React, { Component } from 'react';
import { Filter } from '../../store/modules/repositories/types';
import './styles.css';

class FilterItem extends Component<{data: Filter}> {
  componentDidMount() {}

  render() {
      const {data} = this.props;
    return (
      <div>
        <label className="filter-title">{data.key}</label>
        <label className="filter-count">{data.doc_count}</label>
      </div>
    );
  }
}

export default FilterItem;