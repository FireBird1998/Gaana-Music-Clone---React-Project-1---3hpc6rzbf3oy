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
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from "@mui/material/styles";

//Utility function and others
import { AuthContext } from "../Context/AuthContex";
import toast from "react-hot-toast";
import { Close } from "@mui/icons-material";

export default function UpdatePassword({ closeModal, closeBtn }) {
  const theme = useTheme();
  const authContext = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Get the form values
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    const currPassword = data.get("Currpassword");

    if (!name || !email || !password || !currPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    updatePass(name, email, password, currPassword);

    console.log(
      data.get("name"),
      data.get("email"),
      data.get("password"),
      data.get("Currpassword")
    );
  };

  async function updatePass(name, email, password, currPassword) {
    const url =
      "https://academics.newtonschool.co/api/v1/user/updateMyPassword";

    const data = {
      name: name,
      email: email,
      passwordCurrent: currPassword,
      password: password,
      appType: "music",
    };

    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          projectId: "f104bi07c49",
          "Content-Type": "application/json",
          Authorization: `Bearer ${authContext.authState.token}`,
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
        toast.success("Password Upadated Successfully");
        closeModal(); // Close the modal after successful password update
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
          position: "relative",
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: theme.palette.background.paper,
          px: 8,
          py: 6,
          borderRadius: "10px",
        }}
      >
        <Typography component="h1" variant="h5">
          Update Password
        </Typography>
        {closeBtn && 
          (<Avatar>
            <CloseIcon onClick={closeModal} />
          </Avatar>)
        }
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label=" Full Name"
            name="name"
            autoComplete="text"
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
            name="Currpassword"
            label="Current Password"
            type="password"
            id="Currpassword"
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="New Password"
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onSubmit={handleSubmit}
            sx={{ mt: 3, mb: 2, bgcolor: theme.palette.secondary.main }} // use theme color
          >
            Update Password
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
