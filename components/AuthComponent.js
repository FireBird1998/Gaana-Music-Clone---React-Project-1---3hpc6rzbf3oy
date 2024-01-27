"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Switch from "@mui/material/Switch";
import { useTheme } from "@mui/material/styles";

import { AuthContext } from "./Context/AuthContex";
//Components that will go in modal

import SignIn from "./SignIn";
import Register from "./Register";

const AuthComponent = () => {
  const [open, setOpen] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);

  const authContex = React.useContext(AuthContext);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleToggle = () => setToggle(!toggle);

  const theme = useTheme();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 600,
    bgcolor: theme.palette.background.paper, 
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      {authContex.isUserAuthenticated() ? (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Hi, {authContex.authState.userInfo.name}
        </Typography>
      ) : (
        <Button onClick={handleOpen} sx={{color: theme.palette.text.primary}}>
          Login / Signup
        </Button>
       )} 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Switch checked={toggle} onChange={handleToggle} color="secondary" />
          {toggle ? <Register /> : <SignIn toggle={handleToggle} closeModal={handleClose} />}
        </Box>
      </Modal>
    </div>
  );
};

export default AuthComponent;
