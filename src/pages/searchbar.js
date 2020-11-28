import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Component } from 'react'

class SearchBar extends Component {
  render() {
    return (
        <Form>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      </Form>  
    );  
    }
  }

export default SearchBar 

