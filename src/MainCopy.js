import React, { Component } from 'react';
import logo from "./Genius-Plaza-Sign.jpg";
import './MainCopy.css';


class MainCopy extends Component {
  render() {
    return (
      <div className="body-wrap">
        <div className="heading">
          <p className="heading-title">About Genius Plaza</p>
        </div>
        <div className="main-copy">
          <img src={logo} alt="about us" width="250px"/>
          <div className="copy">
            {this.props.children}
          </div>
          <div className="video">
            <video width="50%" loop="" controls="show">
              <source src={this.props.vidurl} type="video/mp4"></source>
            </video>
          </div>
        </div>
      </div>
    );
  }
}

export default MainCopy;