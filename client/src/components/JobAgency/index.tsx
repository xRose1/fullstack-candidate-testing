import React, { useState } from 'react';
import Avatar from 'react-avatar';
import JobItem from './JobItem';
import './styles.css';

const JobAgency = (props: any): any => {

  const { data } = props;
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="job-container">
      <div className="job-title-container" onClick={(): any => setExpanded(!expanded)}>
        <Avatar name={data.name} className="avatar" color="#bdbdbd" maxInitials={2} round={'8px'} />
        <span className="job-title">{data.total_jobs_in_hospital} jobs for {data.name}</span>
      </div>
      {
        expanded && (
          <div>
            {data.items.map((item: any): any => <JobItem data={item} key={item.job_id} />)}
          </div>
        )
      }
    </div>
  );
};

export default JobAgency;
