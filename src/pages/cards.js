import Card from 'react-bootstrap/Card';
import { Component } from 'react';
import filters from '../data/filters.json'; 
import React from 'react';


class Cards extends Component {

  

  render() {
    return (
    <div>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>JOB TYPE</Card.Title>
            {
              filters.job_type.map((postData) => {
                return (
                  <Card.Text>
                    {postData.key} {postData.doc_count}
                  </Card.Text>
                )
              })
            }
        </Card.Body>
      </Card>
      <br />
    
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>DEPARTMENT</Card.Title>
          <Card.Text>
          {
              filters.department.map((postData) => {
                return (
                  <Card.Text>
                    {postData.key} {postData.doc_count}
                  </Card.Text>
                )
              })
            }         
             </Card.Text>
        </Card.Body>
      </Card>
      <br />
    
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>WORK SCHEDULE</Card.Title>
          <Card.Text>
          {
              filters.work_schedule.map((postData) => {
                return (
                  <Card.Text>
                    {postData.key} {postData.doc_count}
                  </Card.Text>
                )
              })
            }
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>EXPERIENCE</Card.Title>
          <Card.Text>
          {
              filters.experience.map((postData) => {
                return (
                  <Card.Text>
                    {postData.key} {postData.doc_count}
                  </Card.Text>
                )
              })
            }
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    
    </div>

        );  
    }
  }

export default Cards 

