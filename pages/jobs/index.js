
import React, { useEffect } from "react";
import { connect } from 'react-redux';

import { getJobs, getJobFilter } from 'redux/actions';

import JobType from 'components/jobs/JobType';
import JobList from 'components/jobs/JobList';
import JobModal from 'components/jobs/JobModal';

import data_filter from 'constant/job-filter-dummy';
import data_jobs from 'constant/jobs-dummy'

export const Jobs =  ({ jobs, job_filter, getJobs, getJobFilter }) => {
  const job_filters = [
    { name: 'JOB TYPE', key:'job_type'},
    { name: 'DEPARTMENT', key:'department'},
    { name: 'WORK SCHEDULE', key:'work_schedule'},
    { name: 'EXPERIENCE', key:'experience'},
  ]

  useEffect(() => {
    getJobs();
    getJobFilter();
  }, []);

  return (
    <div>
      <div className="relativew-full mx-auto py-4">
        <div className="absolute h-10 mt-1  flex items-center pl-10">
          <svg className="h-4 w-4 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path></svg>
        </div>
        <input id="search-toggle" type="search" placeholder="Search for any job, title, keywords or company" className="block w-full bg-brand-white focus:outline-none focus:bg-white focus:shadow text-gray-700 font-bold pl-16 pr-4 py-3"/>
      </div>

      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-1">
          {
            Object.keys(job_filter).map( (item, idx) => (
              <JobType name={ (item.split('_')).join(" ").toUpperCase() } data={job_filter[item]} key={idx}/>
            ))
          }
        </div>
        <div className="col-span-4">
          <JobList jobs={jobs} jobfilter={job_filter}/>
        </div>
      </div>

      <JobModal />
    </div>
  )
}

const mapStateToProps = state => ({
  jobs: state.job.jobs,
  job_filter: state.job.job_filter,

});

const mapDispatchToProps = { getJobs, getJobFilter };

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
