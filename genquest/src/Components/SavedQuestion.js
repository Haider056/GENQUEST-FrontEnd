import React, { useState } from 'react';
import SidePanel from './SidePanel';
import './Styles/SavedQuestions.css'
const SpecificPage = () => {
  const [questions, setQuestions] = useState([]);
  const dummyQuestions = [
    'What is your favorite color?',
    'How many programming languages do you know?',
    'What is your favorite food?',
    'Where would you like to travel?',
  ];

  const generateQuestion = () => {
    const randomIndex = Math.floor(Math.random() * dummyQuestions.length);
    const newQuestion = dummyQuestions[randomIndex];
    setQuestions([...questions, newQuestion]);
  };

  const saveQuestions = () => {
    
    console.log('Questions saved:', questions);
  };

  return (
    <div className="specific-page">
      <div>
        <SidePanel />
      </div>
      <div className='SQ-header'>
      <h1>Generate and Save Questions</h1>
      <button onClick={generateQuestion}>Generate Question</button>
      <button onClick={saveQuestions}>Save Questions</button>
      </div>
      <div>
        <h2>Generated Questions:</h2>
        <ul>
          {questions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SpecificPage;
