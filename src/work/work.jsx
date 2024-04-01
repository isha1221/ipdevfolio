import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import wood from '../image/wood2.png';
import './work.css';
import { motion } from 'framer-motion';
import { X } from '@mui/icons-material';

const BoxStyle = {
  backgroundImage: `url(${wood})`,
  backgroundSize: 'cover',
  borderRadius: '5px',
  padding: '16px',
  textAlign: 'center',
};

export default function CustomizedTimeline() {
  return (
    <Box  display="flex" alignItems="center" justifyContent="center" className='time_main'>
      
  
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
            className='typo'
          >
            2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <Typography style={{ backgroundColor:'transparent', color:'black',fontWeight:'bold' } } >
              1st year
              {/* <FastfoodIcon /> */}
            </Typography>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '16px', px: 2 }}>
            < Box sx={BoxStyle}>
              <motion.Typography initial={{scale: 0, opacity: 0 }}
  whileInView={{ opacity: 1,scale: 1 }} variant="h6" component="span" className='typo'>
              Explored 
              </motion.Typography>
              <Typography className='typo'>
              <motion.div initial={{scale: 0, opacity: 0 }}
  whileInView={{ opacity: 1,scale: 1 }}>
    In my first year of college, I began exploring new technologies, diving headfirst into Python as my first coding language. This led me to develop an innovative image editor using Python, laying the groundwork for my journey into software development.
    </motion.div></Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
            className='typo'
          >
            2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <Typography style={{ backgroundColor:'transparent', color:'black',fontWeight:'bold' } }>
              2nd year
              {/* <LaptopMacIcon /> */}
            </Typography>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '16px', px: 2 }}>
            <Box sx={BoxStyle}>
              <Typography variant="h6" component="span" className='typo'>
                Started building
              </Typography>
              <Typography className='typo'>
              <motion.div initial={{scale: 0, opacity: 0 }}
  whileInView={{ opacity: 1,scale: 1 }}>
                During my second year, I focused on web development, creating two e-commerce websites using HTML and CSS. One of these sites featured a robust Django backend, enriching my skills in both front-end and back-end technologies.
                </motion.div></Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
            className='typo'
          >
            2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <Typography style={{ backgroundColor:'transparent', color:'black',fontWeight:'bold' } }>
              3rd year
              {/* <HotelIcon /> */}
            </Typography>
            <TimelineConnector  />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '16px', px: 2 }}>
            <Box sx={BoxStyle}>
              <Typography variant="h6" component="span" className='typo'>
                Expanded tech stack
              </Typography>
              <Typography className='typo'>
              <motion.div initial={{scale: 0, opacity: 0 }}
  whileInView={{ opacity: 1,scale: 1 }}>
    In my third year, I expanded my expertise by learning React, TypeScript, and Golang. I undertook ambitious projects, including a basic to-do list app and a sophisticated prototype of a cube satellite, showcasing my dedication to continuous learning and innovation.
  </motion.div></Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
            className='typo'
          >
            2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <Typography style={{ backgroundColor:'transparent', color:'black',fontWeight:'bold' } } sx={{ borderRadius: '50%' }}>
              4th year
              {/* <RepeatIcon /> */}
            </Typography>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '16px', px: 2 }}>
            <Box sx={BoxStyle}>
              <Typography variant="h6" component="span" className='typo'>
                Hands on experience
              </Typography>
              <Typography className='typo'>
              <motion.div initial={{scale: 0, opacity: 0 }}
  whileInView={{ opacity: 1,scale: 1 }}>Transitioning into my final year, I seized an internship opportunity at TekGeminus. Here, I delivered projects that exceeded client expectations, further solidifying my reputation as a capable and reliable software developer. This journey of exploration, learning, and practical application has equipped me with a diverse skill set and a relentless drive to excel in the ever-evolving tech landscape.
  </motion.div></Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}
