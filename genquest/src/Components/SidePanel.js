import React from 'react';
import Arrow from './Assets/Arrow.svg';
import './Styles/SidePanel.css';

function SidePanel() {
  return (
    <div id="sidePanel">
      <ol>
        <li>
          <span>Dashboard</span>
          <img src={Arrow} alt="Arrow" />
        </li>
        <li>
          <span>Saved Questions</span>
          <img src={Arrow} alt="Arrow" />
        </li>
        <li>
          <span>My Profile</span>
          <img src={Arrow} alt="Arrow" />
        </li>
      </ol>
    </div>
  );
}

export default SidePanel;
