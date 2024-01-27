import * as React from 'react';
import { pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


const songLikeComponent = () => {
  return (
    <IconButton aria-label="Like">
        <FavoriteBorderOutlinedIcon sx={{ color: pink[500] }} />
    </IconButton>
  )
}

export default songLikeComponent