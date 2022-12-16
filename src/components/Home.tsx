import { Box, Fade } from '@mui/material';
import React from 'react';


const Home = () => {
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Fade in timeout={1000}>
        {/* FADE IN NAME, WAIT A SEC THEN TYPEWRITER THE BIO/INTRO TEXT */}
      <h1>Home</h1>
        
      </Fade>
    </Box>
  )
}

export default Home