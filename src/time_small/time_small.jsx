import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './time_small.css';

const Timeline = () => {
  const timelineItems = [
    { year: 'Year 1', description: 'In my first year of college, I began exploring new technologies, diving headfirst into Python as my first coding language. This led me to develop an innovative image editor using Python, laying the groundwork for my journey into software development.' },
    { year: 'Year 2', description: 'During my second year, I focused on web development, creating two e-commerce websites using HTML and CSS. One of these sites featured a robust Django backend, enriching my skills in both front-end and back-end technologies.' },
    { year: 'Year 3', description: 'In my third year, I expanded my expertise by learning React, TypeScript, and Golang. I undertook ambitious projects, including a basic to-do list app and a sophisticated prototype of a cube satellite, showcasing my dedication to continuous learning and innovation. ' },
    { year: 'Year 4', description: 'Transitioning into my final year, I seized an internship opportunity at TekGeminus. Here, I delivered projects that exceeded client expectations, further solidifying my reputation as a capable and reliable software developer. This journey of exploration, learning, and practical application has equipped me with a diverse skill set and a relentless drive to excel in the ever-evolving tech landscape.' }
  ];

  return (
    <div className="timeline-container">
      <AnimatePresence>
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }} // Initial position and opacity
            animate={{ opacity: 1, y: 0 }} // Final position and opacity
            exit={{ opacity: 0, y: -50 }} // Exit position and opacity
            transition={{ duration: 0.5, delay: index * 0.2 }} // Animation duration and delay
            className="timeline-box"
            style={{ marginTop: index !== 0 ? '20px' : '0' }} // Add margin-top except for the first box
          >
            <h3>{item.year}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Timeline;
