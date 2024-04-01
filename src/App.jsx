// import React from 'react';
// import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import './App.css';
// import ChatBot from './chatBot/chatbot';
// import RotatingPenguin from './penguin/penguin';
// import Navbar from './navBar/navBar';
// import HomePage from './home/home';
// import Board from './board/board';
// import Snow from './SnowFall/snowFall';
// import FloatingSquare from './flot/float';
// import About from './About/about';
// import Tech from './techStack/tech';
// import Footer from './footer/footer';
// import CustomizedTimeline from './work/work';

// function App() {
//   return (
//     // <BrowserRouter>
//     //   {/* <Grid className="App"> */}
//     //   <Routes>
//     //       <Route path="/chatbot" element={<ChatBot/>} />
//     //       <Route path="/" element={<RotatingPenguin/>} />
//     //       </Routes>
//     //   {/* </Grid> */}
//     // </BrowserRouter>

//     // <Navbar></Navbar>

//     // <BrowserRouter>
//     //    <HomePage></HomePage>
//     //    <About></About>
//     // </BrowserRouter>
//     // <Snow></Snow>
//     // <Board></Board>
//     // <FloatingSquare></FloatingSquare>

//     <Tech></Tech>
//     // <CustomizedTimeline></CustomizedTimeline>

//     // <Footer></Footer>
   
    
//   );
// }

// export default App;


// App.js
// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import HomePage from './home/home';
// import About from './About/about';
// import Tech from './techStack/tech';
// import CustomizedTimeline from './work/work';
// import Footer from './footer/footer';
// import Navbar from './navBar/navBar';
// import './App.css';

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar /> {/* Render Navbar outside of Routes */}
//       <Routes>
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/tech" element={<Tech />} />
//         <Route path="/time" element={<CustomizedTimeline />} />
//         <Route path="/footer" element={<Footer />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './home/home';
import About from './About/about';
import Tech from './techStack/tech';
import CustomizedTimeline from './work/work';
import Footer from './footer/footer';
import Navbar from './navBar/navBar';
import Snow from './SnowFall/snowFall';
import TimelineSmall from './time_small/time_small';
import './App.css';
import TimeMain from './time_main/time_main';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <div id="home"><HomePage /></div>
        <div id="about"><About /></div>
        <div id="tech"><Tech /></div>

        <div id="time"><TimeMain /></div>
      {/* <div id="time_small"><TimelineSmall /> </div> */}

        <div id="footer"><Footer /></div>
      </div>
     
    </div>
  );
}

export default App;
