import React, { useContext, useEffect, useState } from "react";
import Carosel from "./Carosel";
import { Box } from "@mui/material";

import { HeroSectionContext } from "./Context/HeroContext";

import { fetchWithProjectId } from "@/utils";

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

  console.log(albums);

  return (
    <Box
      sx={{
        width: "90vw",
        overflow: "hidden",
      }}
    >
      {loading ? 'Loading...' : <Carosel albums={albums} />}
    </Box>
  );
};


export default HeroSection;
