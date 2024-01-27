"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useTheme } from "@mui/material/styles";
import toast from 'react-hot-toast';

export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    
  };
  const theme = useTheme();
  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Full Name"
              name="username"
              autoComplete="text"
              autoFocus
              InputLabelProps={{
                sx: {
                  '&.Mui-focused': { // this targets the focused state of the label
                    color: theme.palette.secondary.main, // change the label color to secondary color when focused
                  },
                },
              }}
              sx={{
                '& .Mui-focused': { // this targets the focused state
                  color: theme.palette.secondary.main, // change the text color to secondary color when focused
                },
                '& .MuiOutlinedInput-root': { // this targets the input element
                  '&.Mui-focused fieldset': { // this targets the focused state of the fieldset
                    borderColor: theme.palette.secondary.main, // change the border color to secondary color when focused
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              InputLabelProps={{
                sx: {
                  '&.Mui-focused': { // this targets the focused state of the label
                    color: theme.palette.secondary.main, // change the label color to secondary color when focused
                  },
                },
              }}
              sx={{
                '& .Mui-focused': { // this targets the focused state
                  color: theme.palette.secondary.main, // change the text color to secondary color when focused
                },
                '& .MuiOutlinedInput-root': { // this targets the input element
                  '&.Mui-focused fieldset': { // this targets the focused state of the fieldset
                    borderColor: theme.palette.secondary.main, // change the border color to secondary color when focused
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputLabelProps={{
                sx: {
                  '&.Mui-focused': { // this targets the focused state of the label
                    color: theme.palette.secondary.main, // change the label color to secondary color when focused
                  },
                },
              }}
              sx={{
                '& .Mui-focused': { // this targets the focused state
                  color: theme.palette.secondary.main, // change the text color to secondary color when focused
                },
                '& .MuiOutlinedInput-root': { // this targets the input element
                  '&.Mui-focused fieldset': { // this targets the focused state of the fieldset
                    borderColor: theme.palette.secondary.main, // change the border color to secondary color when focused
                  },
                },
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              
              sx={{ mt: 3, mb: 2, bgcolor: theme.palette.secondary.main}}
            >
              Register
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
      </Container>
  );
}