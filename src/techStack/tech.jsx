import * as React from 'react';
import Grid from '@mui/material/Grid';
import FloatingSquare from '../flot/float';

import './tech.css';
// import wood_bg from '../image/ice_frame.png';

export default function Tech() {
  const texts = ['DSA', 'OOPs', 'Java', 'Python', 'Go', 'Django', 'React', 'JavaScript', 'Typescript', 'Redux', 'ReastAPI', 'HTML & Css', 'SCSS','Figma']; // Array of texts for each square

  const generateSquares = (count) => {
    const squares = [];
    for (let i = 0; i < count; i++) {
      squares.push(
        <Grid
          key={i}
          item
          xs={4}
          sm={3}
          
          // sx={{ margin: '8px' }} // Add margin to reduce horizontal gap
        >
          <FloatingSquare text={texts[i]} style={{ textAlign: 'center'}} /> {/* Pass the text to each FloatingSquare */}
        </Grid>
      );
    }
    return squares;
  };

  return (
    <Grid
      container
      spacing={1} // Add spacing between the grid items
      px={4}
      // paddingLeft={'200px'}
       
      height={'150vh'}

      className='tech_main'
      
      
      style={{
        
        // background: 'rgb(2,0,36)',
        // background: 'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,105,121,1) 0%, rgba(6,141,167,1) 10%, rgba(3,177,212,1) 24%, rgba(121,229,251,1) 43%, rgba(210,240,246,1) 76%)',
        // backgroundImage: `url(${wood_bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
         // Shift everything towards the right
      }}
    >
      <Grid item xs={12} container justifyContent={'center'} sx={{ gap: '16px' }}> {/* Reduce horizontal gap */}
        {generateSquares(14)}
      </Grid>
    </Grid>
  );
}
