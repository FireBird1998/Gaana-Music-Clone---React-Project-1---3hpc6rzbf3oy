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

import { PlayerList } from "../Context/PlayerList";
import LikeSongComponent from "./LikeSongComponent";
import { FavouriteSongsContext } from "../Context/FavouriteSongsContext";
import { AuthContext } from "../Context/AuthContex";

const FavouriteTracks = () => {
  const { addToFront, clearPlaylist } = React.useContext(PlayerList);
  const authContext = React.useContext(AuthContext);
  const { favoriteSongs } = React.useContext(FavouriteSongsContext);

  const [artistArray, setArtistArray] = React.useState([]);

  const handleAddToFront = (track) => {
    clearPlaylist();
    addToFront(track);
  };

  const artistDetails = async (artistId) => {
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/music/artist?filter={"_id": "${artistId}"}`,
        {
          headers: {
            projectid: "f104bi07c49",
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  };


  /**
 * Fetches artists based on favorite songs and updates the artist array.
 * @function fetchArtists
 * @async
 * @returns {Promise<void>}
 */
const fetchArtists = async () => {
    /**
     * Extracts artist IDs from favorite songs.
     * @type {Array<number>}
     */
    const artistIds = favoriteSongs.flatMap((song) => song.artist);
  
    /**
     * Removes duplicate artist IDs.
     * @type {Array<number>}
     */
    const uniqueArtistIds = [...new Set(artistIds)];
  
    /**
     * Fetches artist details for each unique artist ID.
     * @type {Array<Promise<object>>}
     */
    const artists = await Promise.all(
      uniqueArtistIds.map((id) => artistDetails(id))
    );
  
    /**
     * Updates the artist array with fetched artists.
     * @type {Array<object>}
     */
    setArtistArray(artists);
  };
  
  React.useEffect(() => {
    fetchArtists();
  }, [favoriteSongs]);
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Track</TableCell>
            <TableCell align="left">Artists</TableCell>
            {authContext.isUserAuthenticated() && (
              <TableCell align="center">Like</TableCell>
            )}
            <TableCell align="center">Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {favoriteSongs.map((track) => {
            // Get the artist ids for the current track
            const artistIds = track.artist;

            // Filter the artists array to get the artists for the current track
            const trackArtists = artistArray.filter((artist) =>
              artistIds.includes(artist.data[0]._id)
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
                  {trackArtists.map((artist) => artist.data[0].name).join(", ")}
                </TableCell>
                {authContext.isUserAuthenticated() && (
                  <TableCell align="center">
                    <LikeSongComponent id={track._id} />
                  </TableCell>
                )}
                <TableCell align="center">no data</TableCell>
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

export default FavouriteTracks;
