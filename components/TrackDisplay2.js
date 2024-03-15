"use client"; 
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

import { PlayerList } from "./Context/PlayerList";
import LikeSongComponent from "@/components/UserComponent/LikeSongComponent";
import { AuthContext } from "./Context/AuthContex";
import { useMediaQuery } from "@mui/material";

const TrackDisplay2 = ({ tracks, artistArray }) => {
  const { addToFront, clearPlaylist } = React.useContext(PlayerList);

  const handleAddToFront = (track) => {
    clearPlaylist();
    addToFront(track);
  };

  const authContext = React.useContext(AuthContext);
  const isMobile = useMediaQuery("(max-width:750px)");

  return (
    <TableContainer component={Paper}>
      <Table sx={{ Width: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Track</TableCell>
            <TableCell align="left">Artists</TableCell>
            {authContext.isUserAuthenticated() && (
              <TableCell align="center">Like</TableCell>
            )}
            {!isMobile && <TableCell align="center">Duration</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {tracks.map((track) => {
            // Get the artist ids for the current track
            const artistIds = track.artist;

            // Filter the artists array to get the artists for the current track
            const trackArtists = artistArray.filter((artist) =>
              artistIds.includes(artist._id)
            );
            return (
              <TableRow
                key={track._id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
                
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleAddToFront(track);
                  }}
                >
                  {songCard(
                    track.thumbnail,
                    track.title,
                    track,
                    handleAddToFront
                  )}
                  {track.title}
                </TableCell>

                <TableCell align="left">
                  {trackArtists.map((artist) => artist.name).join(", ")}
                </TableCell>
                {authContext.isUserAuthenticated() && (
                  <TableCell align="center">
                    <LikeSongComponent id={track._id} />
                  </TableCell>
                )}
                {!isMobile && <TableCell align="center">no data</TableCell>}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const songCard = (img, title, track, handleAddToFront) => (
  <Card
    sx={{
      width: 48,
      height: 48,
    }}
    onClick={() => handleAddToFront(track)}
  >
    <CardActionArea
      sx={{
        position: "relative",
      }}
    >
      <CardMedia
        component="img"
        height="48"
        width="48"
        image={img}
        alt={title}
      />
      <CardContent
        sx={{
          position: "absolute",
        }}
      ></CardContent>
    </CardActionArea>
  </Card>
);

export default TrackDisplay2;
