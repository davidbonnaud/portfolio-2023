import { Box, Button, Fade } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import SendIcon from '@mui/icons-material/Send';
import DownloadIcon from '@mui/icons-material/Download';

const About = () => {
  const [showButton, setShowButton] = useState(false);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Box className='intro' sx={{ textAlign: 'center', pb: {sm: 5} }}>
        <Fade in timeout={1000}>
          <h1 className='about-heading'>About</h1>
        </Fade>
      </Box>   

      <Box className='intro' sx={{ textAlign: 'center', maxWidth: '75%', maxHeight: '65%' }}>
        <Typewriter 
          onInit={(typewriter) => {
            typewriter.typeString("Hi, I'm David Bonnaud.<br/>").pauseFor(750).typeString("I'm a developer currently based out of Cambridge, MA with a Bachelor's of Science in Computer Science from California State University, Fullerton.").pauseFor(750).typeString(" I also have a certification in full stack web development from Southern Methodist University.").pauseFor(750).typeString(" Some of the languages and frameworks I have experience with are JavaScript, Python, Django, React, TypeScript, C#, and Ruby on Rails.").start().callFunction(() => setShowButton(true));
          }}
          options={{
            delay: 24,
            wrapperClassName: 'typewriter',
          }}
        /> 
      </Box>

      <Box className='contact-resume'>
        
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', mt: {xs: 7, sm: 10}, zIndex: 1 }}>
            <Stack direction='row' spacing={2} sx={{ zIndex: 1 }}>
              <Fade in={showButton} timeout={1000}>
                <Button variant="contained" href={require('./david-bonnaud-resume.pdf')} target={'_blank'} download sx={{ backgroundColor: '#3b4c66', '&:hover': {backgroundColor: '#51688a'} }} startIcon={<DownloadIcon />}>Resume</Button>
              </Fade>
              <Fade in={showButton} timeout={1000}>
                <Button onClick={() => window.location.href = 'mailto:dbonnaud123@gmail.com'} variant="contained" sx={{ backgroundColor: '#3b4c66', '&:hover': {backgroundColor: '#51688a'} }} endIcon={<SendIcon />} >Email Me</Button>
              </Fade>
            </Stack>
          </Box>
      </Box>
    </Box> 
  )
}

export default About