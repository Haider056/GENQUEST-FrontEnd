// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/SignUp';
import SidePanel from './Components/SidePanel';
import Home from './Components/HomePage'
import Profile from './Components/ProfileManagement';
import SavedQuestions from './Components/SavedQuestion';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} /> 
          <Route path="/SidePanel" element={<SidePanel />} /> 
          <Route path="/Home" element={<Home />} />   
          <Route path="/Profile" element={<Profile />} />    
          <Route path="/SavedQuestion" element={<SavedQuestions />} />        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
