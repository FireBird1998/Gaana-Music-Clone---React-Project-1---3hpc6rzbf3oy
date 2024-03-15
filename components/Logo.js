"use client";
import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";

const Logo = () => {
  const isMobile = useMediaQuery(
    // add breakpoint for mobile
    "(max-width:600px)"
  );
  
  return (
    <Link href="/">
      {!isMobile ? (
        <Box
          component="img"
          src="/assets/ganna_T.png"
          alt="logo"
          height={30}
          width={100}
        />
      ) : (
        <Box
          component="img"
          src="/assets/miniGanna_T.png"
          alt="logo"
          height={50}
          width={50}
        />
      )}
    </Link>
  );
};

export default Logo;
