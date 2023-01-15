import { Box, Divider, Fade } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import Tilt from 'react-parallax-tilt';
import planetSvg from './portfolio-images/planet-clouds.svg';

const Home = () => {
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Grid2 container spacing={4} sx={{ justifyContent: 'center', alignItems: 'center' }} style={{ margin: 0, width: '100%' }} >
        <Grid2 sx={{ zIndex: 1 }} xs={12} sm={6} style={{ maxWidth: 500 }} >
          <Fade in timeout={1000}>
            <h1 className='hero-text'>David Bonnaud</h1>        
          </Fade>

          <Fade in timeout={1500}>
            <Divider sx={{ backgroundColor: '#fff', zIndex: 1, position: 'relative', width: '40%', borderWidth: 2, ml: 3, mt: 2 }} />
          </Fade>
          
          <Fade in timeout={2000}>
            <h2 className='hero-subtext'>Software Engineer</h2>
          </Fade>
        </Grid2>

        <Grid2 sx={{ zIndex: 1 }} xs={12} sm={6} style={{ maxWidth: 700 }} >
          <Tilt className="parallax-effect" transitionSpeed={3000} tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={500}>
            <img className='inner-element' src={planetSvg} alt='budgetyimg' />
          </Tilt>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default Home