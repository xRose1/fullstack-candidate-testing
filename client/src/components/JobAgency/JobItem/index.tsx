import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './styles.css';



const JobItem = (props: any) => {

  const { data } = props;
  const [expanded, setExpanded] = useState(false);


  const getAgoString = (dataString: string) => {
    const date = new Date(dataString);
    const d = Math.floor((new Date().getTime() - date.getTime()) / 1000);

    const minuteSeconds = 60
    const hourSeconds = minuteSeconds * 60
    const daySeconds = hourSeconds * 24
    const weekSeconds = daySeconds * 7

    if (d < minuteSeconds * 2) {
      return {
        value: `now`, // this is the value should be displayed
        next: minuteSeconds * 2 - d, // this number is used to schedule the next update of a value
      }
    } else if (d < hourSeconds) {
      const minutes = Math.floor(d / minuteSeconds)
      return `${minutes} minutes ago`
    } else if (d < daySeconds) {
      const hours = Math.floor(d / hourSeconds)
      return `${hours} hour${hours > 1 ? `s` : ``} ago`
    } else if (d < weekSeconds) {
      const days = Math.floor(d / daySeconds)
      return `${days} day${days > 1 ? `s` : ``} ago`
    } else {
      const weeks = Math.floor(d / weekSeconds)
      return `${weeks} week${weeks > 1 ? `s` : ``} ago`
    }
  }

  return (
    <>
      <div className="job-item-container row" onClick={() => setExpanded(!expanded)}>
        <div className="col-md-10">
          <h6 className="job-item-title">{data.job_title}</h6>
          <span className="job-description">{data.job_type} | ${data.salary_range[0]} - ${data.salary_range[1]} an hour | {data.city}</span>
        </div>
        <div className="col-md-2 date-container">
          <span className="job-post-date">{getAgoString(data.created)}</span>
        </div>
      </div>
      {
        expanded && (
          <div className="job-description-container mt-4">
            <div className="row">
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-md-4"><h6 className="job-field-name">Department</h6></div>
                  <div className="col-md-8"><p className="job-field-value">{data.department.join(',')}</p></div>
                </div>
                <div className="row">
                  <div className="col-md-4"><h6 className="job-field-name">Hours / shifts</h6></div>
                  <div className="col-md-8"><p className="job-field-value">{data.hours[0]} hours / {data.work_schedule}</p></div>
                </div>
                <div className="row">
                  <div className="col-md-4"><h6 className="job-field-name">Summary</h6></div>
                  <div className="col-md-8"><p className="job-field-value">{data.description}</p></div>
                </div>
              </div>
              <div className="col-lg-2 btns-container">
                <Button variant="primary" className="btn-detail">Job details</Button>
                <Button variant="outline-primary" className="btn-detail">Save job</Button>
              </div>
            </div>

          </div>)
      }
    </>
  );
}

export default JobItem;