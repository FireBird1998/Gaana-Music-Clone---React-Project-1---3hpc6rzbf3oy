"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

//MUI components Import
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";

// constants import
import { primaryNavLinks, secondaryNavLinks } from "@/public/constants";
import { Content } from "next/font/google";
import styles from "@/components/NavCss.module.css";
import NavFilter from "./NavFilter";
import Player from "./Player";

//testing
// console.log(primaryNavLinks);
// function print() {
//   primaryNavLinks.map((item) => {
//     console.log(item.title);
//     console.log(item.path);
//     console.log(item.id);
//   })
// }
// print();

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "50px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
}));

export default function NavBar({ content }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = React.useState(pathname);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const goToGannaPlus = () => {
    router.push(`${secondaryNavLinks[0].path}`);
  };

  // Update the active state whenever pathname changes
  React.useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  return (
    <Box sx={{
      position: 'relative',
      minHeight: '100vh',
    }}>
      <Box sx={{ display: "flex", marginBottom: "100px", }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Link href="/">
                  <Box
                    component="img"
                    src="/assets/logo.png"
                    alt="logo"
                    height={26}
                    width={100}
                  />
                </Link>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search Artist, Songs, Albums"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  justifyContent: "right",
                  width: "100%",
                  marginLeft: "30px",
                }}
              >
                {/* <Button variant="contained" href="#contained-buttons" sx={{
                background: 'linear-gradient(90deg, rgba(255,2,5,1) 20%, rgba(255,105,0,1) 80%)',
                borderRadius: '50px',
                fontSize: '12px',
                width: '100%',
                mx: '20px',
              }}>
                Welcome Offer: 1 Month Trial @ ₹1
              </Button>    */}
                <Link
                  href={`/loginRegister`}
                  className={`${
                    pathname === "/loginRegister"
                      ? styles.otherActive
                      : styles.otherLink
                  } `}
                >
                  Log in/Sign Up
                </Link>

                <Button
                  variant="contained"
                  onClick={goToGannaPlus}
                  sx={{
                    color: "black",
                    borderRadius: "50px",
                    fontSize: "12px",
                    marginRight: "20px",
                  }}
                >
                  Get Gaana Plus
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {primaryNavLinks.map((link) => (
              <ListItem key={link.id} disablePadding>
                <Link
                  href={`${link.path}`}
                  className={`${styles.link} ${
                    pathname === link.path ? styles.active : ""
                  }`}
                >
                  <ListItemButton>
                    <ListItemText primary={link.title} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {secondaryNavLinks.map((link) => (
              <ListItem key={link.id} disablePadding>
                <Link
                  href={`${link.path}`}
                  className={`${styles.link} ${
                    pathname === link.path ? styles.active : ""
                  }`}
                >
                  <ListItemButton>
                    <ListItemText primary={link.title} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <NavFilter />
          {content}
          
        </Main>
      </Box>
      <Box sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}>
      <Player />
      </Box>
      
    </Box>
  );
}
