import React, { useEffect, useState } from 'react'
import { AppBar, Toolbar, Box, Button, Typography, Drawer, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PortraitIcon from '@mui/icons-material/Portrait';
import WorkIcon from '@mui/icons-material/Work';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import SendIcon from '@mui/icons-material/Send';
import DownloadIcon from '@mui/icons-material/Download';

const NavbarComponent = () => {
  const navItems = ['Home', 'About Me', 'Portfolio'];
  const [components, setComponents] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileNavColor, setMobileNavColor] = useState('transparent');
  const drawerWidth = 240;
  const threshold = 50; // number of pixels from the top at which the navbar should be elevated

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > threshold) {
        // add a class to the navbar that elevates it
        setMobileNavColor('#283344');
      } else {
        // remove the class that elevates the navbar
        setMobileNavColor('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

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
      <Link href='https://www.linkedin.com/in/davidbonnaud/' underline='none' target="_blank" rel="noreferrer">
        <LinkedInIcon sx={{ color: '#fff', fontSize: 40, position: 'absolute', top: 10, left: 70 }} />
      </Link>
      <Link href='https://github.com/davidbonnaud' underline='none' target="_blank" rel="noreferrer">
        <GitHubIcon sx={{ color: '#fff', fontSize: 40, position: 'absolute', top: 10, right: 70 }} />
      </Link>
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
        <ListItem key={'Resume'} disablePadding>
          <ListItemButton href={require('./david-bonnaud-resume.pdf')} target={'_blank'} download>
            <ListItemIcon>
              <DownloadIcon sx={{ color: '#fff' }} />
            </ListItemIcon>
            <Typography fontFamily={'Ubuntu'}>
              <ListItemText primary={'Resume'} />
            </Typography>
          </ListItemButton>
        </ListItem>

        <ListItem key={'Resume'} disablePadding>
          <ListItemButton onClick={() => window.location.href = 'mailto:dbonnaud123@gmail.com'}>
            <ListItemIcon>
              <SendIcon sx={{ color: '#fff' }} />
            </ListItemIcon>
            <Typography fontFamily={'Ubuntu'}>
              <ListItemText primary={'Email Me'} />
            </Typography>
          </ListItemButton>
        </ListItem>
      </List>
      
    </div>
  );

  return (
    <>
    {/* <ElevationScroll> */}
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
      
      <AppBar id='navbar' style={{ background: mobileNavColor, boxShadow: 'none' }}>
        <Toolbar>          
          <Typography variant="h6" fontFamily={'Ubuntu'} noWrap component="div" sx={{ flexGrow: 1, ml: 2, opacity: (components === 0 ? .5 : 1), display: { sm: 'none' } }}>
            David Bonnaud
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
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
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link href='https://www.linkedin.com/in/davidbonnaud/' underline='none' target="_blank" rel="noreferrer">
              <LinkedInIcon sx={{ color: '#fff', fontSize: 40, pl: 1 }} />
            </Link>
            <Link href='https://github.com/davidbonnaud' underline='none' target="_blank" rel="noreferrer">
              <GitHubIcon sx={{ color: '#fff', fontSize: 40, pl: 2 }} />
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      
      { components === 0 ? <Home /> : null }
      { components === 1 ? <About /> : null }
      { components === 2 ? <Portfolio /> : null }
      {/* </ElevationScroll> */}
    </>
  )
}

export default NavbarComponent