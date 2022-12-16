import { Box, Fade } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Fade in timeout={1000}><h1>About</h1></Fade>
    </Box>
  )
}

export default About