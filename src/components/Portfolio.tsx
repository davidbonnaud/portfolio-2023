import { Box, Fade } from '@mui/material'
import React from 'react'

const Portfolio = () => {
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Fade in timeout={1000}>
        <h1>Portfolio</h1>
      </Fade>
    </Box>
  )
}

export default Portfolio