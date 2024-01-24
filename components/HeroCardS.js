"use client"

import * as React from 'react'
import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Button from '@mui/material/Button';

import { PlayerList } from './Context/PlayerList';

const HeroCardS = ({tracks}) => {
    const { addToLast, clearPlaylist } = React.useContext(PlayerList);

    const handlePlayAll = () => {
        clearPlaylist();
      tracks.forEach((track) => addToLast(track));
    };
  
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
            <Typography variant="body1" component="p" sx={{ marginBottom: "20px" }}>
              Top songs for {tracks[0].mood.charAt(0).toUpperCase() + tracks[0].mood.slice(1)} Mood
              <br />
              Created by FireBird
              <br />
              20 Tracks
            </Typography>
            <Button variant="contained" sx={{ borderRadius: "20px" }} onClick={handlePlayAll}>
              Play All
            </Button>
            <Button variant="contained" sx={{ borderRadius: "20px", marginLeft: "20px" }} onClick={clearPlaylist}>clear playlist</Button>
          </div>
        </Box>
      );
    } else {
      // Return null or some placeholder component when tracks array is empty
      return null;
    }
}

export default HeroCardS