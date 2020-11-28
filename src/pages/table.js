import { Component } from 'react'
import Card from 'react-bootstrap/Card';
import jobs from '../data/jobs.json'; 
import React from 'react';

class Tables extends Component {
  render() {
    return (
      <Card style={{ width: '45rem' }}>
      <Card.Body>
        <Card.Text>
        {
            jobs.map((postData) => {
              return (
                <Card.Text>
                  {postData.total_jobs_in_hospital} jobs for {postData.name}
                </Card.Text>
              )
            })
          }
        </Card.Text>
      </Card.Body>
    </Card>
    );  
    }
  }

export default Tables 

