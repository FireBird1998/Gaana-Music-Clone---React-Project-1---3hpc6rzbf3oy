import * as React from "react";
import { pink } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import { FavouriteSongsContext } from "../Context/FavouriteSongsContext";

const SongLikeComponent = ({ id }) => {
  const { favoriteHandler } = React.useContext(FavouriteSongsContext);

  return (
    <IconButton
      aria-label="Like"
      onClick={() => {
        console.log(`IconButton clicked with id: ${id}`); // Log the id
        favoriteHandler(id);
      }}
    >
      <FavoriteBorderOutlinedIcon sx={{ color: pink[500] }} />
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
