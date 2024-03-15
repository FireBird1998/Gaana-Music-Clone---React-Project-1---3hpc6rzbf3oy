import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';

const ComingSoonPage = () => {
  return (
    <Container>
      <Grid container style={{ height: '50vh' }} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Box textAlign="center">
            <Typography variant="h2" gutterBottom>
              Coming Soon
            </Typography>
            <Typography variant="subtitle1">
              We're currently working on an amazing new site. Stay tuned for more updates!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ComingSoonPage;
