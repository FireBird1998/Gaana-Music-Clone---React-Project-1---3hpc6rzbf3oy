"use client";

import TrackDisplay from "@/components/TrackDisplay";
import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { fetchWithProjectId } from "@/utils";
import CircularProgress from "@mui/material/CircularProgress";

import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import { PlayerList } from "@/components/Context/PlayerList";
import { useMediaQuery } from "@mui/material";

const page = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToLast, clearPlaylist } = useContext(PlayerList);
  const isMobile = useMediaQuery("(max-width:750px)");

  const handlePlayAll = () => {
    clearPlaylist();
    tracks.forEach((track) => addToLast(track));
  };

  useEffect(() => {
    const fetchTrending = async () => {
      const data = await fetchWithProjectId(
        `https://academics.newtonschool.co/api/v1/music/song?sort={"release" : -1}`,
        {}
      );
      setTracks(data.data);
      setLoading(false);
    };

    fetchTrending();
  }, []);
  
  if (loading) {
    return <CircularProgress />;
  }

  return (
    <>
      {HeroCard(tracks, handlePlayAll, clearPlaylist, isMobile)}
      <TrackDisplay tracks={tracks} />
    </>
  );
};

export default page;


const HeroCard = (tracks, handlePlayAll, clearPlaylist, isMobile) => {
    // Check if tracks array is not empty
    if (tracks.length > 0) {
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
                image={tracks[Math.floor(Math.random() * 20)].thumbnail} // Now it should work
                alt="Trending Songs"
              />
            
          </Card>
          <div>
            <Typography variant="h2" component="h2">
              New Songs
            </Typography>
            <Typography variant="body1" component="p" sx={{ marginBottom: '20px'}}>
              New Songs, Refreshed Daily
              <br />
              Created by FireBird
              <br />
              20 Tracks
            </Typography>
            <Button variant="contained" sx={{ borderRadius: '20px',  }} onClick={handlePlayAll}>Play All</Button>
            <Button variant="contained" sx={{ borderRadius: "20px", marginLeft: "20px" }} onClick={clearPlaylist}>clear playlist</Button>
          </div>
        </Box>
      );
    } else {
      // Return null or some placeholder component when tracks array is empty
      return null;
    }
  };