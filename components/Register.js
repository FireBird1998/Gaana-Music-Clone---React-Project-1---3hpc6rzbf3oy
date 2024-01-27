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

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validatePassword = (password) => {
  // the password must contain at least one uppercase letter, one lowercase letter, and one number.
  return password.length >= 8;
}

/**
 * Register component for user registration
 * @param {function} toggle - Function to toggle the registration form
 * @returns {JSX.Element} - Register component JSX
 */
export default function Register({toggle}) {

  /**
   * Handles the form submission
   * @param {Event} event - The form submission event
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    if (!validateEmail(email)) {
      toast.error('Invalid email address.');
      return;
    }

    if (!validatePassword(password)) {
      toast.error('Invalid password. It must be at least 8 characters long. Must have one Cap and One Small');
      return;
    }

    console.log({
      name: data.get('username'),
      email: email,
      password: password,
    });

    await handleRegister(email, data.get('username'), password);
  };

  const theme = useTheme();

  /**
   * Handles the user registration
   * @param {string} email - The user's email
   * @param {string} name - The user's name
   * @param {string} password - The user's password
   */
  const handleRegister = async (email, name, password) => {
    const url ="https://academics.newtonschool.co/api/v1/user/signup";

    const bodyData = {
      name: name,
      email: email,
      password: password,
      appType: "music",
    };

    try{
      const response = await fetch(url, {
        method: "POST",
        headers: {
          projectId: "f104bi07c49",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      });

      if(!response.ok) {
        const error = await response.json();
        toast.error(error.message);
        throw new Error(error.message);
      } else {
        const data = await response.json();
        toast.success("Registration successful!");
        console.log(data);
        toggle();
      }
    } catch (error) {
      console.error("There was an error with the Signup operation: ", error);
    }
  };

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
        </Box>
      </Box>
    </Container>
  );
}
