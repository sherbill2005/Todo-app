// About.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();  // Get the navigate function

  const goHome = () => {
    navigate('/');  // Navigate to the home page
  };

  return (
    <div>
      <h1>About Us</h1>
      <p>This is the About page of the Todo app.</p>
      <button onClick={goHome}>Go Back to Home</button>
    </div>
  );
}

export default About;
