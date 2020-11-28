import { Component } from 'react'
import Card from 'react-bootstrap/Card'

class BottomFooter extends Component {
  render() {
    return (
        <Card>
        <Card.Body>
            <blockquote className="blockquote mb-0">
            <p>
                {' '}
                About Us{' '}
            </p>
            <footer>
                We are a team of nurses, doctors, technologists and executives dedicated to help nurses find the jobs that they love.
            </footer>
            </blockquote>
        </Card.Body>
        </Card>
    );  
    }
  }

export default BottomFooter 

