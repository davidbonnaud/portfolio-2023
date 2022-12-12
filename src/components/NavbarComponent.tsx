import React, { useState } from 'react'
import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';

const NavbarComponent = () => {
  const navItems = ['Home', 'About Me', 'Portfolio'];
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(true);
  const [portfolio, setPortfolio] = useState(true);

  const navHandler = (item: string) => {
    switch (item) {
      case 'Home':
        setAbout(false);
        setPortfolio(false);
        setHome(true);
        break;

      case 'About Me':
        setPortfolio(false);
        setHome(false);
        setAbout(false);
        break;

      case 'Portfolio':
        setHome(false);
        setAbout(false);
        setPortfolio(true);
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
    </>
  )
}

export default NavbarComponent