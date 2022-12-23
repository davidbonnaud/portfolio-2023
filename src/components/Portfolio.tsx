import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Fade, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import React from 'react';

const Portfolio = () => {
  const projects = ['FishHooked', 'Flixter', 'Nomster', 'Grammable', 'Budgety'];

  return (
    <Box sx={{ maxWidth: '100%', maxHeight: '100%' }}>
      <Box sx={{ display: 'flex', width: '100%', pt: 6, justifyContent: 'center', alignItems: 'center' }}>
        <Fade in timeout={1000}>
          <h1>Portfolio</h1>
        </Fade>
      </Box>

      <Grid2 container spacing={3} sx={{ justifyContent: 'center', alignItems: 'center', }} style={{ margin: 0, width: '100%' }} >
      <Fade in timeout={1200}>
        <Grid2 sx={{ zIndex: 1 }} xs={3} >
          <Card sx={{ maxWidth: 400, maxHeight: 400 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={require('./portfolio-images/budgety.png')}
                alt="budgety"
              />
              <Divider sx={{ borderBottomWidth: 2, borderColor: 'light-gray' }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Budgety
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Budgeting app built with JavaScript, HTML, and CSS. 
                </Typography>
              </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        </Fade>

        <Fade in timeout={1600}>
          <Grid2 sx={{ zIndex: 1 }} xs={3} >
            <Card sx={{ maxWidth: 400, maxHeight: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={require('./portfolio-images/budgety.png')}
                  alt="budgety"
                />
                <Divider sx={{ borderBottomWidth: 2, borderColor: 'light-gray' }} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Budgety
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Budgeting app built with JavaScript, HTML, and CSS. 
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        </Fade>

        <Fade in timeout={2000}>
          <Grid2 sx={{ zIndex: 1 }} xs={3} >
            <Card sx={{ maxWidth: 400, maxHeight: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={require('./portfolio-images/budgety.png')}
                  alt="budgety"
                />
                <Divider sx={{ borderBottomWidth: 2, borderColor: 'light-gray' }} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Budgety
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Budgeting app built with JavaScript, HTML, and CSS. 
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        </Fade>
      </Grid2>

      
    </Box>
  )
}

export default Portfolio