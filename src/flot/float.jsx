import React from 'react';
import './float.css';

function FloatingSquare({ index,text }) {
  return (
    <div className="floating-square-container">
      <div className={`floating-square ${index % 2 === 0 ? 'up' : 'down'}`}>
      <span className="text" >{text}</span>
      </div>
    </div>
  );
}

export default FloatingSquare;
