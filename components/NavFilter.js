import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

// function handleClick(event) {
//   event.preventDefault();
//   console.info("You clicked a breadcrumb.");
// }

const NavFilter = () => {
  return (
    <div role="presentation" >
      <Breadcrumbs aria-label="breadcrumb"
        sx={{
            paddingBottom: '20px',
        }}
      >
        <Link 
            underline="hover" 
            color="inherit" 
            href="/"
        >
          All
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/trendingSongs"
        >
          Trending Songs
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/"
        >
          New Songs
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/"
        >
          Old Songs
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/"
        >
          Mood & Genres
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/"
        >
          Album
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/"
        >
          Radio
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/"
        >
          Podcast
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/"
        >
          My Music
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default NavFilter;
