import React, { Component } from 'react';
import Employee from './Employee';
import axios from 'axios'
import './Employees.css';

class Employees extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get(this.props.url)
      .then(response => this.setState({data:response.data}))
  }
  
  
  render() {
    const imgurl = "https://www.geniusplaza.com";
    return (
      <div className="employees-wrap">
        <div className="meet-the-team">
          <h3>MEET OUR TEAM</h3>
        </div>
        <div className="employee-grid">
          { this.state.data.map((emp)=><Employee url={imgurl + emp.image} alt={ emp.id } name={ emp.name } title={ emp.title }/>) }
        </div>
      </div>
    );
  }
}


export default Employees;