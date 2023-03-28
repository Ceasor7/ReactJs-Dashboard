import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@material-ui/core';

const IntroductionPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Box sx={{ flex: 1, display: 'flex' }}>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'grey.200',
            }}
          >
            <Box sx={{ maxWidth: 600, p: 4 }}>
              <Typography variant="h4" gutterBottom>
                Welcome to our website
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse euismod, quam sed maximus bibendum, odio ex ultrices
                mi, non tristique tellus elit nec elit. Nulla facilisi. Nam
                mattis interdum leo, nec tempus elit fringilla non. Nunc at
                tempor libero, id convallis quam. Maecenas vitae bibendum magna.
                Sed scelerisque quis quam vel rhoncus. Sed ac est dolor. Duis
                sit amet bibendum nisl, vel molestie odio.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'white',
            }}
          >
            <Box sx={{ width: 640, height: 1100 }}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/b7zBJNmdImo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Box>
          </Box>
        </Box>
        <Box sx={{ flex: 1, display: 'flex' }}>
          <Grid container spacing={2} sx={{ flex: 1 }}>
            <Grid item xs={12} sm={4}>
              <Box sx={{ bgcolor: 'grey.200', p: 4 }}>
                <Typography variant="h5" gutterBottom>
                  Create Request
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse euismod, quam sed maximus bibendum, odio ex
                  ultrices mi, non tristique tellus elit nec elit.
                </Typography>
                <Button variant="contained" color="primary" href="/page1">
                  Place Request
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ bgcolor: 'grey.300', p: 4 }}>
                <Typography variant="h5" gutterBottom>
                  Fill out your profile
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse euismod, quam sed maximus bibendum, odio ex
                  ultrices mi, non tristique tellus elit nec elit.
                </Typography>
                <Button variant="contained" color="primary" href="/page2">
                  Go to profile
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ bgcolor: 'grey.300', p: 4 }}>
                <Typography variant="h5" gutterBottom>
                  Manage Billing
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse euismod, quam sed maximus bibendum, odio ex
                  ultrices mi, non tristique tellus elit nec elit.
                </Typography>
                <Button variant="contained" color="primary" href="/page2">
                  Go to payment setting
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default IntroductionPage;
