import React from 'react';
import { Link } from 'react-router-dom';
import Arrow from './Assets/Arrow.svg';
import './Styles/SidePanel.css';

function SidePanel() {
  return (
    <div id="sidePanel">
      <ol>
        <li>
          <Link to="/Home">
            <span>Dashboard</span>
          </Link>
          <img src={Arrow} alt="Arrow" />
        </li>
        <li>
          <Link to="/SavedQuestion">
            <span>Saved Questions</span>
          </Link>
          <img src={Arrow} alt="Arrow" />
        </li>
        <li>
          <Link to="/Profile">
            <span>My Profile</span>
          </Link>
          <img src={Arrow} alt="Arrow" />
        </li>
      </ol>
    </div>
  );
}

export default SidePanel;
