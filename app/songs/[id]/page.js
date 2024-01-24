"use client";

import TrackDisplay from "@/components/TrackDisplay";
import React, { useEffect } from "react";
import { useState } from "react";
import { fetchWithProjectId } from "@/utils";
import CircularProgress from "@mui/material/CircularProgress";

import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Button from '@mui/material/Button';
import { useParams } from "next/navigation";
import TrackDisplay2 from "@/components/TrackDisplay2";

import { PlayerList } from "@/components/Context/PlayerList"; 
import HeroCardS from "@/components/HeroCardS";

const page = () => {
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id} = useParams();
    
  
    useEffect(() => {
      const fetchTrending = async () => {
        const data = await fetchWithProjectId(
          `https://academics.newtonschool.co/api/v1/music/song?filter={${id}}`,
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
        <HeroCardS tracks={tracks}/>
        <TrackDisplay tracks={tracks}  />
         
      </>
    );
}

export default page

const HeroCard = (tracks) => {
    // Check if tracks array is not empty

    const { addToLast, clearPlaylist  } = React.useContext(PlayerList);

    const handlePlayAll = () => {
      clearPlaylist();
      tracks.forEach(track => addToLast(track));
    }

    if (tracks.length > 0) {
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
                image={tracks[Math.floor(Math.random() * 20)].thumbnail} // Now it should work
                alt={tracks[0].mood}
              />
            
          </Card>
          <div>
            <Typography variant="h2" component="h2">
              {tracks[0].mood.charAt(0).toUpperCase() + tracks[0].mood.slice(1)} Songs
            </Typography>
            <Typography variant="body1" component="p" sx={{ marginBottom: '20px'}}>
              Top songs for {tracks[0].mood.charAt(0).toUpperCase() + tracks[0].mood.slice(1)} Mood
              <br />
              Created by FireBird
              <br />
              20 Tracks
            </Typography>
            <Button variant="contained" sx={{ borderRadius: '20px',  }} onClick={() => {handlePlayAll}} >Play All</Button>
          </div>
        </Box>
      );
    } else {
      // Return null or some placeholder component when tracks array is empty
      return null;
    }
  };