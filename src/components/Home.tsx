import { Box, Fade } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Fade in timeout={1000}><h1>Home</h1></Fade>
    </Box>
  )
}

export default Home