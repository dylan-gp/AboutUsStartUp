import React, { Component } from 'react';
import './Employee.css';

class Employee extends Component {
  render() {
    return (
      <div className="grid-item">
        <img className="emp-img" src={ this.props.url } alt={ this.props.alt }/>
        <div className="emp-info">
          <p className="emp-name">{ this.props.name }</p>
          <p className="emp-title">{ this.props.title }</p>
        </div>
      </div>
    );
  }
}


export default Employee;