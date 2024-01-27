"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";

import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// function handleClick(event) {
//   event.preventDefault();
//   console.info("You clicked a breadcrumb.");
// }

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? theme.palette.secondary.main
        : theme.palette.primary.gray,
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.secondary.main,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color:
    theme.palette.mode === "light"
      ? theme.palette.secondary.main
      : theme.palette.primary.main,
  "&:hover": {
    textDecoration: "none",
    color: theme.palette.primary.black,
  },
}));

const MenuItemWithLink = ({ handleClose, href, children }) => {
  const linkRef = React.useRef(null);

  const handleClick = (event) => {
    handleClose(event);
    linkRef.current.click();
  };

  return (
    <MenuItem onClick={handleClick} disableRipple>
      <StyledLink ref={linkRef} href={href}>
        {children}
      </StyledLink>
    </MenuItem>
  );
};

const NavFilter = () => {
  return (
    <div role="presentation">
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{
          paddingBottom: "20px",
        }}
      >
        <StyledLink underline="hover" color="inherit" href="/">
          All
        </StyledLink>
        <StyledLink underline="hover" color="inherit" href={`/trendingSongs`}>
          Trending Songs
        </StyledLink>
        <StyledLink underline="hover" color="inherit" href={`/newSongs`}>
          New Songs
        </StyledLink>
        <StyledLink underline="hover" color="inherit" href="/oldSongs">
          Old Songs
        </StyledLink>
        {moodAndGene()}
        <StyledLink underline="hover" color="inherit" href="/album">
          Album
        </StyledLink>
        <StyledLink underline="hover" color="inherit" href="/">
          Radio
        </StyledLink>
        <StyledLink underline="hover" color="inherit" href="/">
          Podcast
        </StyledLink>
        <StyledLink underline="hover" color="inherit" href="/myMusic">
          My Music
        </StyledLink>
      </Breadcrumbs>
    </div>
  );
};

export default NavFilter;

const moodAndGene = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          height: "25px",
          width: "200px",
        }}
      >
        Mood & Genres
      </Button>
      <StyledMenu
        id="mood_genres"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItemWithLink handleClose={handleClose} href={`/songs/"mood":"happy"`}>
          Happy
        </MenuItemWithLink>
        <MenuItemWithLink handleClose={handleClose} href={`/songs/"mood":"sad"`}>
          Sad
        </MenuItemWithLink>
        <MenuItemWithLink handleClose={handleClose} href={`/songs/"mood":"romantic"`}>
          Romantic
        </MenuItemWithLink>
        <MenuItemWithLink handleClose={handleClose} href={`/songs/"mood":"excited"`}>
          Excited
        </MenuItemWithLink>
      </StyledMenu>
    </div>
  );
};
