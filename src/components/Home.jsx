import React from 'react';
import Header from './Header';
import Skills from './Skills';
import './Home.css';

function Home() {
  return (
    <div className="home">
        <Header/>
        <Skills/>
    </div>
  )
}

export default Home