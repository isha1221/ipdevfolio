import React, { useState } from 'react';
import './penguin.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

function RotatingPenguin() {
  const [isRotating, setRotating] = useState(false);

  const rotatePenguin = () => {
    setRotating(!isRotating);
  };

//  const navigate =useNavigate();

//  const handleClick =()=>{
//   navigate('/chatbot')
//  }

  return (
    <div className={`penguin ${isRotating ? 'rotate-animation' : ''}`} onClick={rotatePenguin}>
      <div className="left-mountain"></div>
      <div className="back-mountain"></div>
      <div className="sun"></div>
      <div className="penguin">
        <div className="penguin-head">
          <div className="face left"></div>
          <div className="face right"></div>
          <div className="chin"></div>
          <div className="eye left">
            <div className="eye-lid"></div>
          </div>
          <div className="eye right">
            <div className="eye-lid"></div>
          </div>
          <div className="blush left"></div>
          <div className="blush right"></div>
          <div className="beak top"></div>
          <div className="beak bottom"></div>
        </div>
        
        <div className="penguin-body">
        <div className="chat-button"
        //  onClick={handleClick}
         >
            Let's Chat 
          </div>
          <div className="arm left"></div>
          <div className="arm right"></div>
          <div className="foot left"></div>
          <div className="foot right"></div>
        </div>
      </div>
    </div>
  );
}



export default RotatingPenguin;
