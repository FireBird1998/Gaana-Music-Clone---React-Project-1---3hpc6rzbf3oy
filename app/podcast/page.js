"use client";

import React, { useEffect, useState } from "react";

import CarocelComponent from "@/components/CarocelComponent";
import { fetchWithProjectId } from "@/utils";
import { Box, Typography, CircularProgress } from "@mui/material";

const Page = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchAlbums = async () => {
      const data = await fetchWithProjectId(
        `https://academics.newtonschool.co/api/v1/music/album?limit=100`,
        {}
      );
      setAlbums(data.data);
      setLoading(false);
    };

    fetchAlbums();
  }, []);

  return (
    <>
      <Typography variant="h4" component="h4" sx={{ mb: 2 }}>
        Welcome To All Podcast
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 2,
          }}
        >
          {albums.map((album) => (
            <Box
              key={album._id}
              sx={{
                gap: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CarocelComponent
                key={album._id}
                img={album.image}
                id={album._id}
              />
              <Typography variant="h6" component="h6">
                {album.title}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default Page;
