import { Box, Fade } from '@mui/material';
import React from 'react';
import Typewriter from 'typewriter-effect';

const About = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Box className='intro' sx={{ textAlign: 'center' }}>
        <Fade in timeout={1000}>
          <h1>About</h1>
        </Fade>
      </Box>   

      <Box className='intro' sx={{ textAlign: 'center', maxWidth: '75%' }}>
        <Typewriter 
          onInit={(typewriter) => {
            typewriter.typeString("Hi, I'm David Bonnaud.<br/>").pauseFor(1000).typeString("I'm a developer currently based out of Cambridge, MA with a certification in full stack web development from Southern Methodist University.").pauseFor(1000).typeString(" I graduated from California State University, Fullerton with a Bachelor's of Science in Computer Science.").pauseFor(1000).typeString(" Some of the languages and frameworks I have experience with are JavaScript, Python, Django, React, TypeScript, and Ruby on Rails.").start();
          }}
          options={{
            delay: 30
          }}
        />
      </Box>        
    </Box>
  )
}

export default About