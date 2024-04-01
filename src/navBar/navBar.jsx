import React, { useState } from 'react';
import "./navBar.css";
import { Grid } from '@mui/material';
import PenguinImage from '../image/penguin.png';
import Wood from '../image/wood1.png'; // Import your logo image

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Grid xs={12} container className='navbar' style={{backgroundImage:`url(${Wood})`}}>
      <Grid xs={6}>
        <img src={PenguinImage} alt="Logo" className='image_peng' />
      </Grid>
      <Grid xs={6} className={`navbar-links ${menuOpen ? 'open' : ''}`} p={3}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#tech" onClick={toggleMenu}>Tech-Stack</a>
        <a href="#time" onClick={toggleMenu}>TimeLine</a>
        <a href="#footer" onClick={toggleMenu}>Contact</a>
      </Grid>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`line ${menuOpen ? 'open' : ''}`}></div>
        
      </div>
    </Grid>
  );
};

export default Navbar;
