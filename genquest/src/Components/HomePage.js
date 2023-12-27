// Home.js

import React from 'react';
import SidePanel from './SidePanel';
import './Styles/Home.css';
import logo from './Assets/logo.png';

function Home() {
  return (
    <>
      <div className="Containerr">
        <div>
          <SidePanel />
        </div>
        <div className="Home">
          <img src={logo} alt="logo" />
        </div>
        <div className='Signout'>
          <button>Sign Out</button>
        </div>
      </div>
     <div className='Container2'> 
      <div className='InputFields'>
        <div className='Input'>
          <h2>Select Book</h2>
            
          <input type="text" />
        </div>
        <div className='Input'>
          <h2>Select Topic</h2>
         
          <input type="text" />
        </div>
       <button>Generate</button>
      </div>
        
      <div className='InputFields2'>
        <h2>Table of Contents</h2>
        <input type="text" />
      </div>
      </div>
    </>
  );
}

export default Home;
