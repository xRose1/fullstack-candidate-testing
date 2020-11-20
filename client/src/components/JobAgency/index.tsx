import React, { Component } from 'react';
import Avatar from 'react-avatar';
import JobItem from './JobItem';
import './styles.css';

class JobAgency extends Component<{data: any}, {expanded: boolean}> {
  constructor(props: any) {
    super(props);

    this.state = {
      expanded: false
    }
  }
  componentDidMount() {}

  render() {
    const {data} = this.props;

    return (
      <div className="job-container">
        <div className="job-title-container" onClick={() => this.setState({
          expanded: !this.state.expanded
        })}>
          <Avatar name={data.name} className="avatar" color="#bdbdbd" maxInitials={2} round={'8px'}/>
          <span className="job-title">{data.total_jobs_in_hospital} jobs for {data.name}</span>
        </div>
        {
          this.state.expanded && (
            <div>
              {data.items.map((item: any) => <JobItem data={item} key={item.job_id}/>)}
            </div>
          )
        }
      </div>
    );
  }
}

export default JobAgency;