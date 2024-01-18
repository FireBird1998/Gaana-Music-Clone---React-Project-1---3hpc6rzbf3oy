import React, { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";

import { HeroSectionContext } from "./Context/HeroContext";

import { fetchWithProjectId } from "@/utils";
import HeroCarosel from "./HeroCarosel";

const HeroSection = () => {
  const { albums, setAlbums } = useContext(HeroSectionContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbum = async () => {
      const data = await fetchWithProjectId(
        "https://academics.newtonschool.co/api/v1/music/album",
        {}
      );
      setAlbums(data.data);
      setLoading(false);
    };

    fetchAlbum();
  }, []);


  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "90vw",
          overflow: "hidden",
          display: "block",
        }}
      >
        {loading ? "Loading..." : <HeroCarosel albums={albums}/>}
      </Box>
    </Box>
  );
};

export default HeroSection;
