// import React from 'react';
// import './home.css'; // Assuming you name the CSS file as Aura.css
// import Grid from '@mui/material/Grid';
// import RotatingPenguin from '../penguin/penguin';
// import Navbar from '../navBar/navBar';
// import Board from '../image/wooden_board.png';
// import Board_name from '../board/board';
// import Snow from '../SnowFall/snowFall';
// import CloudComponent from '../colud/cloud';
// import {motion} from 'framer-motion';

// const HomePage = () => {
//   return (
//     // <Grid className='main_home' padding={'0%'} margin={'0%'} xs={12}
//     // //  bgcolor={'lightblue'}
//     // >
//     //   {/* <Grid><Navbar></Navbar></Grid> */}
//     //   <Grid className="aura wrapper"  xs={12} container>
//     //     {/* <Snow /> */}
//     //     <Grid 
//     //     // animate={{y:100 , scale: 1}} initial={{scale: 0}}
//     //     className="custom-shape" xs={12} sm={6} container background-color=' #a6e9fc'>
//     //       <Board_name></Board_name>

//     //       {/* <RotatingPenguin></RotatingPenguin> */}
          
//     //     </Grid>
//     //     <Grid xs={12} sm={6} > 
//     //   <Grid xs={12} paddingTop={'120px'}>
//     //     <CloudComponent></CloudComponent>

//     //     </Grid>
//     //     <Grid className="custom-shape" xs={6} container background-color=' #a6e9fc'>
//     //       {/* <Board_name></Board_name> */}

//     //       <RotatingPenguin></RotatingPenguin>
          
//     //     </Grid>
      
//     //     </Grid>
//     //   </Grid>
//     // </Grid>




// <
// <Grid xs={12} sm={12} container className='main_home'>

// <Grid xs={12} sm={6}>
// <motion.div  className="custom-shape" xs={6} container background-color=' #a6e9fc'> 
//           <Board_name></Board_name>

//            {/* <RotatingPenguin></RotatingPenguin>  */}
          
//  </motion.div> 

// </Grid>
// <Grid xs={12} sm={6} paddingTop={'250px'}>
// <motion.div  

// initial={{ x: "0%" }}
// whileInView={{ x: "calc(10vw - 35%)" }} 
// // // animate={{scale: 1}} initial={{scale: 0, opacity: 0 }}
// // //   whileInView={{ opacity: 1 }} 
//   className="custom-shape" xs={6} container background-color=' #a6e9fc'>
//          {/* <Board_name></Board_name> */}
//          <RotatingPenguin></RotatingPenguin>
          
//         </motion.div>

// </Grid>
// <Snow/>
// </Grid>














// //     <Grid xs={12} container height={'100vh'} >

// // <Grid xs={6}  paddingTop={'-100px'} bgcolor={'red'}>
// // {/* <motion.div  className="custom-shape" xs={6} container background-color=' #a6e9fc'> */}
// //           <Board_name></Board_name>

// //           {/* <RotatingPenguin></RotatingPenguin> */}
          
// //         {/* </motion.div> */}
  
// //   </Grid>
        
// // <Grid xs={6} bgcolor={'yellow'}  paddingTop={'250px'}>
  
// // <motion.div  initial={{ x: "100%" }}
// //      whileInView={{ x: "calc(10vw - 35%)" }} 
// // // animate={{scale: 1}} initial={{scale: 0, opacity: 0 }}
// // //   whileInView={{ opacity: 1 }} 
  
// //   className="custom-shape" xs={6} container background-color=' #a6e9fc'>
// //           {/* <Board_name></Board_name> */}

// //           <RotatingPenguin></RotatingPenguin>
          
// //         </motion.div>
// //   </Grid> 



// //     </Grid>
//   );
// };

// export default HomePage;



import React from 'react';
import './home.css'; // Assuming you name the CSS file as Aura.css
import Grid from '@mui/material/Grid';
import RotatingPenguin from '../penguin/penguin';
import Board_name from '../board/board';
import Snow from '../SnowFall/snowFall'; // Import Snow component
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="home-page-wrapper">
      {/* Snow component as background */}
      <Snow />
      {/* Content of the home page */}
      <Grid container className='main_home'>
        <Grid item xs={12} sm={6}>
          <motion.div className="custom-shape" container background-color=' #a6e9fc'>
            <Board_name />
          </motion.div>
        </Grid>
        <Grid item container xs={12} sm={6} paddingTop={'250px'}  justifyContent={'center'}>
          <motion.div
            initial={{ x: "0%" }}
            whileInView={{ x: "calc(10vw - 35%)" }}
            className="custom-shape" container background-color=' #a6e9fc'>
            <RotatingPenguin />
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
