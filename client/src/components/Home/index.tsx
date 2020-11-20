import React, { Component } from "react";
import { connect } from 'react-redux';
import {Modal} from 'react-bootstrap';
import { bindActionCreators, Dispatch } from 'redux';
import { Filter } from '../../store/modules/repositories/types';
import { ApplicationState } from '../../store';
import * as RepositoriesActions from '../../store/modules/repositories/actions';
import './styles.css';
import { FaSearch } from 'react-icons/fa';

import FilterItem from '../Filter';
import FilterPanel from '../FilterPanel';
import JobAgency from '../JobAgency';


interface StateProps {
  filters: any,
  jobs: any,
}

interface DispatchProps {
  loadFilterRequest(): void,
  loadJobsRequest(): void
}

interface OwnProps {

}

type Props = StateProps & DispatchProps & OwnProps;

class Home extends Component<Props, {content: any}> {
  constructor(props: any) {
    super(props)
    this.state = {
      content: null
    }
  }

  componentDidMount() {
    const { loadFilterRequest, loadJobsRequest } = this.props;
    loadFilterRequest()
    loadJobsRequest()
  }
  onShowMore = (content: any) => {
    this.setState({
      content
    })
  }
  render() {
    const {filters, jobs} = this.props;
    const job_count = jobs.reduce((count: number, job: any) => count + job.total_jobs_in_hospital, 0)
    return (
      <>
        <div className="root">
          <div className="d-none d-sm-block">
            <div className="search-container ">
              <FaSearch className="search-icon" color="gray" />
              <input type="text" className="search-bar" placeholder="Search for any job, title, keywords or company"/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 d-none d-sm-block">
              {
                Object.keys(filters).map((key: string) => <FilterPanel key={key} data={filters[key]} title={key.replace('_', ' ').toUpperCase()} onShowMore={this.onShowMore} />)
              }
            </div>
            <div className="col-md-9">
              <div className="container">
                <div className="join-count-container">
                  <span className="job-count">{job_count}</span>
                  <span> job postings</span>
                </div>
                {
                  jobs.map((item: any) => <JobAgency data={item} key={item.name}/>)
                }
              </div>
            </div>    
          </div>
        </div>

        <Modal show={this.state.content != null} onHide={() => {
          this.setState({
            content: null
          })
        }} 
          centered
          dialogClassName="modal-90w"
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.state.content?this.state.content.title:''}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              {
                this.state.content && 
                this.state.content.filters.map((item: Filter) => <div className="col-md-3"><FilterItem data={item} /></div>)
              }
            </div>
          </Modal.Body>
        </Modal>

      </>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  filters: state.repositories.filters,
  jobs: state.repositories.jobs,
});

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);