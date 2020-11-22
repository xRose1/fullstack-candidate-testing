import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { ApplicationState } from '../../store';
import { FaSearch } from 'react-icons/fa';

import FilterPanel from '../FilterPanel';
import JobAgency from '../JobAgency';
import FilterItem from '../Filter';
import { useDispatch, useSelector } from 'react-redux';
import { loadFilterRequest, loadJobsRequest } from '../../store/modules/repositories/actions';
import { Filter } from '../../store/modules/repositories/types';

import './styles.css';

const Home = (): any => {
  const [content, setContent] = useState<any>(null);
  const dispatch = useDispatch();
  const filters = useSelector((state: ApplicationState): any => state.repositories.filters);
  const jobs = useSelector((state: ApplicationState): any => state.repositories.jobs);
  const job_count = jobs.reduce((count: number, job: any): any => count + job.total_jobs_in_hospital, 0);

  const fetchRepos = (): any => {
    dispatch(loadFilterRequest());
    dispatch(loadJobsRequest());
  };

  useEffect(fetchRepos, []);

  const onShowMore = (data: any): any => {
    setContent(data);
  };

  return (
    <>
      <div className="root p-3 bg-white">
        <div className="d-none d-sm-block">
          <div className="search-container border border-gray-50 bg-white mt-3 p-3">
            <FaSearch className="mt-1" color="gray" />
            <input type="text" className="search-bar ml-2 w-100" placeholder="Search for any job, title, keywords or company" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 d-none d-sm-block">
            {
              Object.keys(filters).map(
                (key: string): any =>
                  <FilterPanel key={key} data={filters[key]} title={key.replace('_', ' ').toUpperCase()} onShowMore={onShowMore} />,
              )
            }
          </div>
          <div className="col-md-9">
            <div className="border border-gray-50 bg-white mt-3 p-3">
              <div className="mt-4 mb-3">
                <span className="font-bold">{job_count}</span>
                <span> job postings</span>
              </div>
              {
                jobs.map((item: any): any => <JobAgency data={item} key={item.name} />)
              }
            </div>
          </div>
        </div>
      </div>

      <Modal show={content != null} onHide={(): any => {
        setContent(null);
      }}
        centered={true}
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton={true}>
          <Modal.Title>{content ? content.title : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            {
              content &&
              content.filters.map((item: Filter): any => <div className="col-md-3" key={item.key}><FilterItem data={item} /></div>)
            }
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Home;
