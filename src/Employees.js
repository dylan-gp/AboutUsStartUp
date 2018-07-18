import React, { Component } from 'react';
import './Employees.css';

class Employees extends Component {
  render() {
    return (
      <div className="employees-wrap">
        <div className="meet-the-team">
          <h3>MEET OUR TEAM</h3>
        </div>
        <div className="employee-grid">
          {/* Employees go here */}
        </div>
      </div>
    );
  }
}


export default Employees;