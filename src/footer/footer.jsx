import React from 'react';
import { motion } from 'framer-motion';
import githubIcon from '../image/icons8-github.svg'; 
import LinkedinIcon from '../image/linkedin.svg';
import CallIcon from '../image/phone.svg';
import mailIcon from '../image/mail.svg';
import { Grid } from '@mui/material';
import './footer.css';

const Footer = () => {
  return (
    <Grid className="container_my-5">
      <footer className="text-center text-lg-start" >
        <Grid className="container d-flex justify-content-center py-5" display={'flex'} justifyContent={'center'} p={'20px'} >
          <motion.a
            href="https://github.com/isha1221"
            className="btn btn-primary btn-lg btn-floating mx-2"
         // Change this to the desired background color
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
            style={{backgroundcolor:'#068da7'}}
              src={githubIcon}
              alt="GitHub"
              className="icon"
              whileHover={{ rotate: 360 }}
            />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/isha-pathak-40aa91215"
            className="btn btn-primary btn-lg btn-floating mx-2"
             // Change this to the desired background color
            whileHover={{ scale: 1.1}} 
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src={LinkedinIcon}
              alt="LinkedIn"
              className="icon"
              whileHover={{ rotate: 360 }}
            />
          </motion.a>
          <motion.a
            href="mailto:ishapathak515@gmail.com"
            className="btn btn-primary btn-lg btn-floating mx-2"
             // Change this to the desired background color
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src={mailIcon}
              alt="Mail"
              className="icon"
              whileHover={{ rotate: 360 }}
            />
          </motion.a>
          <motion.a
            href="tel:+9322890365"
            className="btn btn-primary btn-lg btn-floating mx-2"
            // Change this to the desired background color
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src={CallIcon}
              alt="Call"
              className="icon"
              whileHover={{ rotate: 360 }}
            />
          </motion.a>
        </Grid>
        <section>
        <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
      </section>
      </footer>
    </Grid>
  );
}

export default Footer;
