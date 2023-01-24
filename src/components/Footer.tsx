import { Box, Fade } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ width: '100%', height: '5%', textAlign: 'center', opacity: .5, bottom: 0, position: 'absolute', zIndex: 1, color: '#fff', pb: { xs: 3, md: 1 }, display: { xs: 'none', md: 'block' } }}>
        <Fade in timeout={1000}>
            <p>© Copyright David Bonnaud 2023</p>
        </Fade>
    </Box>
  )
}

export default Footer