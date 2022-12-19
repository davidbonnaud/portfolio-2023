import { Box, Fade } from '@mui/material';
import React from 'react';
import Typewriter from 'typewriter-effect';

const About = () => {
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Fade in timeout={1000}>
        <h1>About</h1>
      </Fade>
      <div className='intro'>
        <Typewriter 
          onInit={(typewriter) => {
            typewriter.typeString("Hi, I'm David Bonnaud. <br/>").pauseFor(1000).typeString("I'm a web developer with experience in full stack development using Python/Django, JavaScript, Ruby on Rails, React, and TypeScript. <br/>").pauseFor(1000).typeString("I graduated from CSUF with a Bachelor's of Science in Computer Science.").start();
          }}
          options={{
            delay: 40
          }}
        />
      </div>
    </Box>
  )
}

export default About