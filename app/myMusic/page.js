"use client";

import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/components/Context/AuthContex";
import { FavouriteSongsContext } from "@/components/Context/FavouriteSongsContext";
import UserHero from "@/components/UserComponent/UserHero";
import toast from "react-hot-toast";
import FavouriteTracks from "@/components/UserComponent/FavouriteTracks";

import AuthComponent from "@/components/AuthComponent";
import { Box } from "@mui/material";


const Page = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const favContext = useContext(FavouriteSongsContext);
  

  useEffect(() => {
    if (!authContext.isUserAuthenticated()) {
      toast.error("You are not logged in");
    }
  }, []);

  return (
    <>
      {authContext.isUserAuthenticated() ? (
        <Box>
          <UserHero name={authContext.authState.userInfo.name} />
          <FavouriteTracks/>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
           <AuthComponent/>
        </Box>
      )}
    </>
  );
};

export default Page;
