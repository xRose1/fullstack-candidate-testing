import React, { useState, useEffect } from "react";
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

const Home = () => {
  const [content, setContent] = useState<any>(null);
  const dispatch = useDispatch();
  const filters = useSelector((state: ApplicationState) => state.repositories.filters);
  const jobs = useSelector((state: ApplicationState) => state.repositories.jobs);
  const job_count = jobs.reduce((count: number, job: any) => count + job.total_jobs_in_hospital, 0);

  const fetchRepos = () => {
    dispatch(loadFilterRequest());
    dispatch(loadJobsRequest());
  }

  useEffect(fetchRepos, []);

  const onShowMore = (content: any) => {
    setContent(content)
  }

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
              Object.keys(filters).map((key: string) => <FilterPanel key={key} data={filters[key]} title={key.replace('_', ' ').toUpperCase()} onShowMore={onShowMore} />)
            }
          </div>
          <div className="col-md-9">
            <div className="border border-gray-50 bg-white mt-3 p-3">
              <div className="mt-4 mb-3">
                <span className="font-bold">{job_count}</span>
                <span> job postings</span>
              </div>
              {
                jobs.map((item: any) => <JobAgency data={item} key={item.name} />)
              }
            </div>
          </div>
        </div>
      </div>

      <Modal show={content != null} onHide={() => {
        setContent(null)
      }}
        centered
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title>{content ? content.title : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            {
              content &&
              content.filters.map((item: Filter) => <div className="col-md-3" key={item.key}><FilterItem data={item} /></div>)
            }
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Home;