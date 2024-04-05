
// import React, { useState, useEffect } from 'react';
// import './about.css';
// import Snow from '../SnowFall/snowFall';
// import { motion } from 'framer-motion';
// import { Grid } from '@mui/material';

// const About = () => {
//   const [words, setWords] = useState([]);

//   useEffect(() => {
//     const text = "I am a dedicated and results-oriented Software Developer, specializing in web and app development, with a keen interest in staying abreast of the latest technological advancements. Holding a BTech degree from Vishwakarma Institute of Technology, Pune, I have honed my skills across various domains, equipping myself with a strong foundation in HTML, CSS, JavaScript, ReactJS, and more. Throughout my academic journey, I've garnered numerous achievements, including publications in prestigious journals such as the International Journal of Computer Research and Technology and the International Journal of Scientific Research. These accolades reflect my commitment to innovation and excellence in the field. My expertise extends to developing user-friendly applications and systems, as demonstrated during my tenure at TekGeminus Solutions Inc. There, I successfully spearheaded the development of a responsive WebSelf Service Portal, incorporating technologies like React, Redux, and TypeScript, resulting in improved customer engagement and user experience. With a proven track record of delivering high-quality work under pressure, I thrive on challenges and am constantly driven to push the boundaries of what's possible. My skill set encompasses a wide range of technologies, from front-end development tools like Figma to back-end frameworks like Django and languages like java and go, enabling me to tackle diverse projects with confidence and proficiency.";
//     const wordsArray = text.split(' ');
//     setWords(wordsArray);
//   }, []);

//   const isHighlighted = (word) => {
//     const highlightedWords = ['Software', 'Developer', 'ReactJS', 'Redux', 'TypeScript', 'Django'];
//     return highlightedWords.some(highlightedWord => word.toLowerCase().includes(highlightedWord.toLowerCase()));
//   };

//   return (
//     <Grid xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'}>
//     <Grid className='about_main'   >
//       <motion.h1
//         initial={{ scale: 0, opacity: 0 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//       >
//         Hi folks!
//       </motion.h1>
//       <p
//       style={{fontSize:"160%"}} 
//       >
//         {words.map((word, index) => (
//           <motion.span
//             key={index}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: index * 0.1 }}
//             style={{ fontWeight: isHighlighted(word) ? 'bold' : 'normal' }}
//           >
//             {word + ' '}
//           </motion.span>
//         ))}
//       </p>
//     </Grid>
//     </Grid>
//   );
// };

// export default About;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './about.css';

const AboutPage = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleButtonClick = () => {
    setShowDetails(!showDetails);
  };

  const handleBackButtonClick = () => {
    setShowDetails(false);
  };

  return (
    <div className="about-container">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={`about-card ${showDetails ? 'split' : ''}`}
      >
        {!showDetails ? (
          <>
            <h1>Hey Folks!</h1>
            <p>I am a dedicated and results-oriented Software Developer, specializing in web and app development. Throughout my career, I've garnered numerous achievements, including publications in prestigious journals such as the International Journal of Computer Research and Technology and the International Journal of Scientific Research. My expertise lies in developing user-friendly applications and systems that drive innovation and excellence. With a proven track record of delivering high-quality work under pressure, I thrive on challenges and am constantly driven to push the boundaries of what's possible</p>
            <button onClick={handleButtonClick}>More</button>
          </>
        ) : (
          <>
            <motion.div
              className="split-card"
              initial={{ x: '-1%', opacity: 0 }} // Initial position and opacity
              animate={{ x: '-10%', opacity: 1 }} // Final position and opacity
              transition={{ type: 'spring', stiffness: 120, damping: 15 }} // Animation type and properties
            >
              <h2 style={{padding:'2%'}}>Experience</h2>
              <p style={{padding:'2%'}}>I've successfully spearheaded the development of a responsive WebSelf Service Portal at TekGeminus Solutions Inc. I have experience in utilizing technologies like React, Redux, and TypeScript to enhance customer engagement and user experience. I thrive on challenges and consistently deliver high-quality work under pressure.</p>
            </motion.div>
            <motion.div
              className="split-card"
              initial={{ x: '-10%', opacity: 0 }} // Initial position and opacity
              animate={{ x: '10%', opacity: 1 }} // Final position and opacity
              transition={{ type: 'spring', stiffness: 120, damping: 15 }} // Animation type and properties
            >
              <h2 style={{padding:'2%'}}>Education</h2>
              <p style={{padding:'2%'}}>I hold a BTech degree from Vishwakarma Institute of Technology, Pune. During my academic journey, I've garnered numerous achievements, including publications in prestigious journals. My academic background has provided me with a strong foundation and a thirst for knowledge in the field of software development</p>
            </motion.div>
            <button onClick={handleBackButtonClick}>Go Back</button>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default AboutPage;
