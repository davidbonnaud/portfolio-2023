import React, { useState } from 'react'
import { AppBar, Toolbar, Box, Button, Typography, Drawer, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PortraitIcon from '@mui/icons-material/Portrait';
import WorkIcon from '@mui/icons-material/Work';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';

const NavbarComponent = () => {
  const navItems = ['Home', 'About Me', 'Portfolio'];
  const [components, setComponents] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerWidth = 240;

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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ backgroundColor: '#283344' }}/>
      <Divider />
      <List>
        {['Home', 'About Me', 'Portfolio'].map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton onClick={() => {
              navHandler(item);
              handleDrawerToggle();
              }}>
              <ListItemIcon>
                {index === 0 ? <HomeIcon sx={{ color: '#fff' }} /> : null}
                {index === 1 ? <PortraitIcon sx={{ color: '#fff' }} /> : null}
                {index === 2 ? <WorkIcon sx={{ color: '#fff' }} /> : null}
              </ListItemIcon>
              <Typography fontFamily={'Ubuntu'}>
                <ListItemText primary={item} />
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </div>
  );

  return (
    <>

      <Box
        component="nav"
        sx={{ flexShrink: { sm: 0 }} }
        aria-label="navigation links"
      >
        <Drawer
          anchor='right'
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            style: {
              backgroundColor: '#283344',
              color: '#fff',
            },
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      
      <AppBar style={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar>          
          <Typography variant="h6" fontFamily={'Ubuntu'} noWrap component="div" sx={{ flexGrow: 1, ml: 2, display: { sm: 'none' } }}>
            David Bonnaud
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{ color: '#fff' }} />
          </IconButton>
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