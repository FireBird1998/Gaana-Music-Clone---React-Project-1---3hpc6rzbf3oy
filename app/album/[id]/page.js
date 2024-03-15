"use client";

import React, { useEffect, useState, useContext } from "react";
import { useParams } from "next/navigation";
import { fetchWithProjectId } from "@/utils";

import {
  Box,
  Card,
  CardMedia,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";

import TrackDisplay2 from "@/components/TrackDisplay2";
import { PlayerList } from "@/components/Context/PlayerList";
import { useMediaQuery } from "@mui/material";
import { Fleur_De_Leah } from "next/font/google";

const page = () => {
  let { id } = useParams();
  const [album, setAlbum] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery("(max-width:750px)");
  const { addToLast, clearPlaylist } = useContext(PlayerList);

  const handlePlayAll = () => {
    clearPlaylist();
    album[0].songs.forEach((track) => addToLast(track));
  };

  useEffect(() => {
    const fetchalbum = async () => {
      const data = await fetchWithProjectId(
        `https://academics.newtonschool.co/api/v1/music/album?filter={"_id": "${id}"}`
      );
      setAlbum(data.data);
      setLoading(false);
    };
    fetchalbum();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <>
      {HeroCard(album, handlePlayAll, clearPlaylist, isMobile)}
      <TrackDisplay2 tracks={album[0].songs} artistArray={album[0].artists} />
    </>
  );
};

export default page;

const HeroCard = (almum, handlePlayAll, clearPlaylist, isMobile) => {
  
  // Check if tracks array is not empty
  if (almum.length > 0) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "20px",
          marginBottom: "30px",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            maxWidth: 345,
            maxHeight: 345,
          }}
        >
          <CardMedia
            component="img"
            height="345"
            width="345"
            image={almum[0].image}
            alt={almum[0].title}
          />
        </Card>
        <div>
          <Typography variant="h2" component="h2">
            {almum[0].title}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ marginBottom: "20px" }}
          >
            {almum[0].description}
            <br />
            {almum[0].songs.length} Tracks
          </Typography>
          <Button
            variant="contained"
            sx={{ borderRadius: "20px" }}
            onClick={handlePlayAll}
          >
            Play All
          </Button>
          <Button
            variant="contained"
            sx={{ borderRadius: "20px", marginLeft: "20px" }}
            onClick={clearPlaylist}
          >
            Clear Playlist
          </Button>
        </div>
      </Box>
    );
  } else {
    // Return null or some placeholder component when tracks array is empty
    return null;
  }
};
