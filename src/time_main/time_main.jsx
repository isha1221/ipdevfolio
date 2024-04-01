import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import CustomizedTimeline from '../work/work';

import TimelineSmall from '../time_small/time_small';
import './time_main.css';

function TimeMain() {
  return (
    <div className='time-main-container'>
        <div className='time_big'>
        <CustomizedTimeline />
      </div>
      <div className='time_sm'>
        <TimelineSmall />
      </div>
        
</div>
      
  );
}

export default TimeMain;