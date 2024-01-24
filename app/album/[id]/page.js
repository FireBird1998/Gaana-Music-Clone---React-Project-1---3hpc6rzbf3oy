"use client";

import React, { useEffect, useState } from "react";
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

const page = () => {
  let { id } = useParams();
  const [album, setAlbum] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchalbum = async () => {
      const data = await fetchWithProjectId(
        `https://academics.newtonschool.co/api/v1/music/album?filter={"_id": "${id}"}`
      );
      setAlbum(data.data);
      setLoading(false);
      console.log(data.data); 
    };
    fetchalbum();
  }, []);

  
  if (loading) {
    return <CircularProgress />;
  }

  return (
    <>
      {HeroCard(album[0])}
      <TrackDisplay2 tracks={album[0].songs} artistArray={album[0].artists}/>
    </>
  );
};

export default page;

const HeroCard = (almum) => {
  // Check if tracks array is not empty
  if (almum) {
    return (
      <Box
        sx={{
          display: "flex",
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
            image={almum.image} // Now it should work
            alt={almum.title}
          />
        </Card>
        <div>
          <Typography variant="h2" component="h2">
            {almum.title}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ marginBottom: "20px" }}
          >
            {almum.description}
            <br />
            {almum.songs.length} Tracks
          </Typography>
          <Button variant="contained" sx={{ borderRadius: "20px" }}>
            Play
          </Button>
        </div>
      </Box>
    );
  } else {
    // Return null or some placeholder component when tracks array is empty
    return null;
  }
};
