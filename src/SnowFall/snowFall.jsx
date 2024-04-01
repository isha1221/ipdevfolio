// import React from 'react';
// import { motion } from 'framer-motion';
// import './snowFall.scss';

// function Snow() {
//   const snowflakes = Array.from({ length: 200 }, (_, index) => index + 1);

//   return (
//     <div className="snow-container" >
//       {snowflakes.map((index) => (
//         <motion.div
//           className="snow"
//           key={index}
//           initial={{ y: -10, x: `${Math.random() * 100}vw`, opacity: Math.random() }}
//           animate={{ y: '100vh', x: `${Math.random() * 100}vw`, opacity: [Math.random(), Math.random(), 0] }}
//           transition={{ duration: Math.random() * 10 + 5, ease: 'linear', repeat: Infinity }}
//         />
//       ))}
//     </div>
//   );
// }

// export default Snow;

import React from 'react';
import { motion } from 'framer-motion';
import './snowFall.scss';

function Snow() {
  const snowflakes = Array.from({ length: 200 }, (_, index) => index + 1);

  return (
    <div className="snow-container">
      {snowflakes.map((index) => (
        <motion.div
          className="snow"
          key={index}
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            opacity: Math.random(),
            width: '10px',
            height: '10px',
            background: 'white',
            borderRadius: '50%'
          }}
          initial={{ y: -10 }}
          animate={{ y: '100vh', opacity: [Math.random(), Math.random(), 0] }}
          transition={{ duration: Math.random() * 10 + 5, ease: 'linear', repeat: Infinity }}
        />
      ))}
    </div>
  );
}

export default Snow;
