import React, { useState } from 'react'
import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';

const NavbarComponent = () => {
  const navItems = ['Home', 'About Me', 'Portfolio'];
  const [components, setComponents] = useState(0);

  const navHandler = (item: string) => {
    switch (item) {
      case 'Home':
        setComponents(0);
        break;

      case 'About Me':
        setComponents(1);
        break;

      case 'Portfolio':
        setComponents(2);
        break;

    }
  }

  return (
    <>
      <AppBar style={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
        <Typography
            variant="h6"
            fontFamily={'Ubuntu'}
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            David Bonnaud
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }} onClick={() => navHandler(item)}>
                <Typography fontFamily={'Ubuntu'}>
                  {item}
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      { components === 0 ? <Home /> : null }
      { components === 1 ? <About /> : null }
      { components === 2 ? <Portfolio /> : null }
    </>
  )
}

export default NavbarComponent