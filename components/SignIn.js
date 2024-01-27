"use client";

import React, { useState, useEffect, useContext } from "react";

//mui component and theme
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";

//Utility function and others
import { AuthContext } from "./Context/AuthContex";
import toast from "react-hot-toast";

export default function SignIn({ toggle, closeModal }) {
  const theme = useTheme();
  const { setAuthState } = useContext(AuthContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    //Preparing the body for the request
    const bodyData = {
      email: data.get("email"),
      password: data.get("password"),
      appType: "music",
    };

    loginUser(bodyData.email, bodyData.password);

    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
  };

  async function loginUser(email, password) {
    
    const url = "https://academics.newtonschool.co/api/v1/user/login";
    const data = {
      email: email,
      password: password,
      appType: "music",
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "projectId" : "f104bi07c49",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const jsonResponse = await response.json();
        toast.error(jsonResponse.message); // Show the error message in a toast
        throw new Error(`HTTP error! status: ${response.status}`);

      } else {
        const jsonResponse = await response.json();

        console.log(jsonResponse);
        toast.success("Login Successful");
        setAuthState(jsonResponse);
        closeModal() // set the auth state
        return jsonResponse;
      }
    } catch (error) {
      console.error("There was an error with the fetch operation: ", error);
      
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
                "&.Mui-focused": {
                  // this targets the focused state of the label
                  color: theme.palette.secondary.main, // change the label color to secondary color when focused
                },
              },
            }}
            sx={{
              "& .Mui-focused": {
                // this targets the focused state
                color: theme.palette.secondary.main, // change the text color to secondary color when focused
              },
              "& .MuiOutlinedInput-root": {
                // this targets the input element
                "&.Mui-focused fieldset": {
                  // this targets the focused state of the fieldset
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
                "&.Mui-focused": {
                  // this targets the focused state of the label
                  color: theme.palette.secondary.main, // change the label color to secondary color when focused
                },
              },
            }}
            sx={{
              "& .Mui-focused": {
                // this targets the focused state
                color: theme.palette.secondary.main, // change the text color to secondary color when focused
              },
              "& .MuiOutlinedInput-root": {
                // this targets the input element
                "&.Mui-focused fieldset": {
                  // this targets the focused state of the fieldset
                  borderColor: theme.palette.secondary.main, // change the border color to secondary color when focused
                },
              },
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onSubmit={handleSubmit}
            sx={{ mt: 3, mb: 2, bgcolor: theme.palette.secondary.main }} // use theme color
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link
                href="#"
                variant="body2"
                sx={{ color: theme.palette.secondary.main }}
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="#"
                onClick={() => {
                  toggle();
                }}
                variant="body2"
                sx={{ color: theme.palette.secondary.main }}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
