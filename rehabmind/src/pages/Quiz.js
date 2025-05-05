import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';

function Quiz() {
  const navigate = useNavigate();

  const handleCardClick = (role) => {
    if (role === "Children") navigate('/childrenquiz'); // Updated to navigate to the Children Quiz
    else if (role === "Teens") navigate('/TeenQuiz');
    else if (role === "Adults") navigate('/AdultQuiz');
  };

  return (
    <div className="quiz-container">
      <h2>Select Your Role</h2>
      <div className="card-container">
        {["Children", "Teens", "Adults"].map((role) => (
          <div key={role} className="role-card" onClick={() => handleCardClick(role)}>
            <h3>{role}</h3>
          </div>
        ))}
      </div>
      {/* Optionally, you can add a button for direct navigation to the Children Quiz */}
     
    </div>
  );
}

export default Quiz;