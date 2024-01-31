import * as React from "react";
import { pink, grey } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

import { FavouriteSongsContext } from "../Context/FavouriteSongsContext";

const LikeSongComponent = ({ id }) => {
  const { favoriteSongs, favoriteHandler } = React.useContext(FavouriteSongsContext);
  const isFavorite = favoriteSongs && favoriteSongs.some(song => song._id === id);

  return (
    <IconButton
      aria-label="Like"
      onClick={() => {
        console.log(`IconButton clicked with id: ${id}`); // Log the id
        favoriteHandler(id);
      }}
      sx={{ backgroundColor: isFavorite ? pink[500] : "transparent" }}
    >
      {isFavorite ? (
        <FavoriteOutlinedIcon sx={{ color: grey[50] }} /> // If the song is a favorite, show the filled icon in white color
      ) : (
        <FavoriteBorderOutlinedIcon sx={{ color: pink[500] }} /> // If the song is not a favorite, show the outlined icon in pink color
      )}
    </IconButton>
  );
};

export default LikeSongComponent;


