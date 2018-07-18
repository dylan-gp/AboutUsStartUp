import React, { Component } from 'react';

import './App.css';
import MainCopy from './MainCopy.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainCopy vidurl="https://www.geniusplaza.com/media/videos/Genius_Plaza_Hiring_Video.mp4">
          Genius Plaza is an education platform dedicated to democratizing education, embodying the ideal that access to information equals access to opportunity. As the first multicultural education platform built for diverse communities, Genius Plaza has expanded its reach to close the academic achievement gap among students across the globe. Genius Plaza was created by a diverse group of educators, programmers, designers, and leaders who believe that education is the only sustainable development vehicle that is available to all, with access as the only barrier.
          <br/><br/>
          The Genius Plaza platform removes this obstacle by providing engaging, practical, research-based curriculum where students are the protagonists of their learning. We bring the best quality education to communities around the world, providing access to the strongest, culturally relevant math, science and language arts content offered.
          <br/><br/>
          We offer a solid foundation in math and language arts, together with the strongest parent engagement tools in the ed tech industry. Our online curriculum is fully bilingual, and the content is culturally relevant and authentic. We don't only guarantee graduation, but we work toward college readiness. We believe that ALL of our kids are college material.
        </MainCopy>
      </div>
    );
  }
}

export default App;
