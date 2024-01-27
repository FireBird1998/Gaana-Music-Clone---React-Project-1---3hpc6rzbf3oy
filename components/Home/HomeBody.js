import React, { useContext, useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";

import SongCarocel from "./SongCarocel";
import Carosel from "../Carosel";
import { fetchWithProjectId } from "@/utils";

const HomeBody = () => {
  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);
  const [loadingNew, setLoadingNew] = useState(true);
  const [albumsNew, setAlbumsNew] = useState([]);
  const [songs, setSongs] = useState([]);
  const [songLoading, setSongLoading] = useState([]);
  useEffect(() => {
    const fetchAlbum = async () => {
      const data = await fetchWithProjectId(
        `https://academics.newtonschool.co/api/v1/music/album?sort={"release":"1"}`,
        {}
      );
      setAlbums(data.data);
      setLoading(false);
    };

    fetchAlbum();
  }, []);

  useEffect(() => {
    const fetchAlbum = async () => {
      const data = await fetchWithProjectId(
        `https://academics.newtonschool.co/api/v1/music/album?sort={"release":"-1"}`,
        {}
      );
      setAlbumsNew(data.data);
      setLoadingNew(false);
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
          maxWidth: "80vw",
          display: "block",
        }}
      >
        <Typography
          variant="h4"
          sx={{ my: 3, textAlign: "left", width: "90%" }}
        >
          1900's Album
        </Typography>
        {loading ? "Loading..." : <Carosel albums={albums} />}

        <Typography
          variant="h4"
          sx={{ my: 3, textAlign: "left", width: "90%" }}
        >New Release</Typography>
        {loadingNew ? "Loading..." : <Carosel albums={albumsNew} />}
      </Box>
    </Box>
  );
};

export default HomeBody;
