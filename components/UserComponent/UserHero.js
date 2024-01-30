import React from "react";
import { Box, Avatar, Typography, Button, Modal } from "@mui/material";
import UpdatePassword from "./UpdatePassword";
import { useTheme } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const UserHero = ({ name }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const color = theme.palette.mode === 'dark' ? theme.palette.primary.main : 'black';

  return (
    <Box
      sx={{
        width: "100%",
        height: "30vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          gap: "1rem",
        }}
      >
        <Avatar
          sx={{
            width: "100px",
            height: "100px",
            border: `2px solid ${theme.palette.secondary.light}`,
            color: color,
          }}
        >
          {name[0].toUpperCase()}
        </Avatar>
        <Box
          sx={{
            color: "#fff",
            fontWeight: "600",
            fontSize: "1.5rem",
          }}
        >
          <Typography variant="h3" sx={{
            color: color,
          }}>
            Hello! {name}. Welcome to your Page
          </Typography>
          <Typography variant="subtitle1" sx={{
            color: color,
            
          }}>
            Here you can update your profile and checkout your favourite songs. 
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
            my: 3,

        }}
      >
        <Button onClick={handleOpen} sx={{
            color: color,
            backgroundColor: theme.palette.secondary.dark,
            '&:hover': {
                backgroundColor: theme.palette.secondary.light,
            },
        }}>Update Password</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="Password Updater"
          aria-describedby="User to update their password"
        >
            <UpdatePassword closeModal={handleClose}/>
        </Modal>
      </Box>
    </Box>
  );
};

export default UserHero;
