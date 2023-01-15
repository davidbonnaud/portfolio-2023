import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Fade, Pagination, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
}

const Portfolio = () => {
  const projects = [['Current Portfolio Site', 'A portfolio website I designed and created using Typescript-React, Material UI, and tsparticles. Designed with mobile platforms in mind and responsive UI for most other platforms as well. Currently in development with additional functionalities planned.', 'portfolio-2023.png', 'https://github.com/davidbonnaud/portfolio-2023'], ['FishHooked', 'An E-commerce platform built using Next.js and Sanity as a headless CMS. Handles transactions with Stripe API.', 'fishhooked.png', 'https://github.com/davidbonnaud/em-shop'], ['Flixter', 'A two-sided, video-streaming marketplace platform that features credit card payment capabilities, user role management, complex user interfaces, and advanced database relationships.', 'flixter.jpg', 'https://github.com/davidbonnaud/flixter'], ['Nomster', 'A Yelp clone that integrates with the Google Maps API and includes features like user comments, star ratings, image uploading, and user authentication.', 'nomster.jpg', 'https://github.com/davidbonnaud/nomster'], ['Grammable', 'An Instagram clone that was built using industry-standard, test-driven development following numerous red/green/refactor cycles.', 'grammable.png', 'https://github.com/davidbonnaud/grammable'], ['2020 Portfolio Site', 'A portfolio site I made following a Udemy course, written in HTML/CSS and Vanilla JavaScript.', 'portfolio-2020.png', 'https://github.com/davidbonnaud/my-portfolio-site'], ['Budgety', 'A budgeting web application built using vanilla JavaScript, HTML, and CSS.', 'budgety.png', 'https://github.com/davidbonnaud/budgety'], ['Flashback', 'A React flashcard app using states to manage card positions and flipping functionality.', 'flashback.png', 'https://github.com/davidbonnaud/flashback']];

  const totalPages = Math.ceil(projects.length / 4);
  const [currentPage, setCurrentPage] = useState(1);

  const theme = createTheme({
    status: {
      danger: '#fff',
    },
    palette: {
      primary: {
        main: '#3b4c66',
        darker: '#fff',
      },
      neutral: {
        main: '#fff',
        contrastText: '#fff',
      },
    },
  });

  const handleChange = (event: any, value: number) => {
    setCurrentPage(value);
  }

  const currentPageItems = projects.slice((currentPage - 1) * 4, currentPage * 4);

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ maxWidth: '100%', maxHeight: '100%', pt: {xs: 4, sm: 12} }}>
      <Box sx={{ display: 'flex', width: '100%', pt: 9, justifyContent: 'center', alignItems: 'center' }}>
        <Fade in timeout={1000}>
          <h1>Portfolio</h1>
        </Fade>
      </Box> 

      <Grid2 container spacing={4} sx={{ justifyContent: 'center', alignItems: 'center', pt: {xs: 4, sm: 10} }} style={{ margin: 0, width: '100%' }} >
        {currentPageItems.map((project) => {
          return (
            <Fade in timeout={1000}>
              <Grid2 sx={{ zIndex: 1 }} xs={12} sm={6} lg={3} style={{ maxWidth: 500 }} >
                <CardActionArea href={project[3]} target={'_blank'}>
                  <Card sx={{ width: '100%', height: 350, justifyContent: 'center' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={require(`./portfolio-images/${project[2]}`)}
                      alt={project[0]}
                      sx={{ objectFit: "contain" }}
                    />
                    <Divider sx={{ borderBottomWidth: 2, borderColor: 'light-gray' }} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {project[0]}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project[1]} 
                      </Typography>
                    </CardContent>
                  </Card>
                </CardActionArea>
              </Grid2>
            </Fade>
          )
        })}
      </Grid2>
      <Box sx={{ color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 4, pb: 4 }}>
        <Pagination count={totalPages} page={currentPage} onChange={handleChange} color='primary' sx={{ zIndex: 1, position: 'relative', '& .MuiPaginationItem-root': {
          color: '#fff',
        } }} />
      </Box>
    </Box>
    </ThemeProvider>
  )
}

export default Portfolio