import * as React from "react";
import { pink, grey } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

import { FavouriteSongsContext } from "../Context/FavouriteSongsContext";

const SongLikeComponent = ({ id }) => {
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

export default SongLikeComponent;

// const favoriteHandler = async function () {
//   try {
//     const response = await fetch(`https://academics.newtonschool.co/api/v1/music/favorites/like`, {
//       method: 'PATCH',
//       headers: {
//         Authorization: `Bearer ${authState.token}`,
//         projectId: 'f104bi07c49',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ songId: id }),
//     })
//     if (!response.ok) {
//       toast.error('There was a error during adding/removing songs')
//       throw new Error('Something went wrong during setting up of favorite.')

//     }
//     const data = await response.json()

//     console.log(data)
//   } catch (err) {

//     console.error(err.message)
//   }
// }
