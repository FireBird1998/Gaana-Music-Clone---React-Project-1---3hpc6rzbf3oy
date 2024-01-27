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
