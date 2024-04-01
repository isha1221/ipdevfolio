

import React from 'react';
import "./board.css";
import { Grid } from '@mui/material';
import PenguinImage from '../image/penguin.png';
import Wood from '../image/wood1.png'; 
// Import your logo image
import {motion} from 'framer-motion';


const Board_name = () => {
  return (
    <>
    <Grid className='main'xs={12}  background-color= 'transparent' >
        <Grid className='rop' xs={12} container >
        <Grid className='left_rop' xs={6}  display={'flex'} justifyContent={'center'}>
            
            </Grid>
            <Grid className='right_rop' xs={6}  display={'flex'} justifyContent={'center'}>
            
            </Grid> 
        </Grid>
        <Grid className='board1' xs={12} bgcolor={'green'} display={'flex'} justifyContent={'center'}>
        <motion.div initial={{scale: 0, opacity: 0 }}
  whileInView={{ opacity: 1,scale: 1 }}className="custom-shape" xs={6} container background-color=' #a6e9fc'>
          {/* <Board_name></Board_name> */}
          Hey! Folks
          {/* <RotatingPenguin></RotatingPenguin> */}
          
        </motion.div> 
     
       </Grid>

       <Grid className='board2' xs={12} bgcolor={'green'} display={'flex'} justifyContent={'center'}>
       <motion.div initial={{scale: 0, opacity: 0 }}
  whileInView={{ opacity: 1,scale: 1 }}className="custom-shape" xs={6} container background-color=' #a6e9fc'>
          {/* <Board_name></Board_name> */}
          I'm Isha Pathak
          {/* <RotatingPenguin></RotatingPenguin> */}
          
        </motion.div> 
       </Grid>

       <Grid className='board3' xs={12} bgcolor={'green'} display={'flex'} justifyContent={'center'}>
       <motion.div initial={{scale: 0, opacity: 0 }}
  whileInView={{ opacity: 1,scale: 1 }}className="custom-shape" xs={6} container background-color=' #a6e9fc'>
          {/* <Board_name></Board_name> */}
          FullStack Devloper
          {/* <RotatingPenguin></RotatingPenguin> */}
          
        </motion.div> 
       </Grid>


    </Grid>
    </>
  );
};

export default Board_name;


