import React, { useEffect, useState } from 'react'
import { AppBar, Toolbar, Box, Button, Typography, Drawer, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PortraitIcon from '@mui/icons-material/Portrait';
import WorkIcon from '@mui/icons-material/Work';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import SendIcon from '@mui/icons-material/Send';
import DownloadIcon from '@mui/icons-material/Download';
import Footer from './Footer';

const NavbarComponent = () => {
  const navItems = ['Home', 'About Me', 'Resume', 'Portfolio'];
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

      case 'Resume':
        setComponents(2);
        break;

      case 'Portfolio':
        setComponents(3);
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
      <Button onClick={() => window.location.href = 'mailto:dbonnaud123@gmail.com'} variant="text" sx={{ color: "#fff", opacity: .5, pl: 2 }}>dbonnaud123@gmail.com</Button>
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

      <Box sx={{ width: '100%', height: '5%', textAlign: 'center', opacity: .5, bottom: 0, position: 'absolute', zIndex: 1, color: '#fff', pb:3 }}>
        <p>© Copyright David Bonnaud 2023</p>
      </Box>
      
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

          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', md: 'flex' }, flexDirection: 'row' }}>
            <Typography
              variant="h6"
              fontFamily={'Ubuntu'}
              component="div"
              sx={{ mt: {sm: 1, md: 0}}}
            >
              David Bonnaud
            </Typography>
            <Typography variant="h6" fontFamily={'Ubuntu'} component="div" sx={{ opacity: .5, ml: { sm: 0, md: 2 } }}>
              <Button onClick={() => window.location.href = 'mailto:dbonnaud123@gmail.com'} variant="text" sx={{ color: "#fff", pl: { sm: 0, md: 1 }}}>dbonnaud123@gmail.com</Button>
            </Typography>
          </Box>
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
      { components === 2 ? <Resume /> : null }
      { components === 3 ? <Portfolio /> : null }

      <Footer />
    </>
  )
}

export default NavbarComponent