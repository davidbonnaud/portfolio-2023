import { Box, Fade } from '@mui/material';
import React from 'react';
import Tilt from 'react-parallax-tilt';


const Home = () => {
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Fade in timeout={1000}>
        <h1>Home</h1>        
      </Fade>
      {/* <Tilt className="parallax-effect" perspective={500}>
        <img className='inner-element' src={require('./portfolio-images/budgety.png')} alt='budgetyimg' />
      </Tilt> */}
    </Box>
  )
}

export default Home