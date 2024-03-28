import React, { useContext } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useTheme } from "@mui/material/styles";
import { PlayerList } from "./Context/PlayerList";
import { useRouter } from "next/navigation";

const SearchBarCard = ({ img, title, track, closeModal }) => {
  const { addToFront, clearPlaylist } = useContext(PlayerList);
  const router = useRouter();
  const handleAddToFront = () => {
    clearPlaylist();
    addToFront(track);
    closeModal(); 
    router.push(`/album/${track.album}`);
  };

  const theme = useTheme();

  return (
    <Card
      sx={{
        maxWidth: 245,
        maxHeight: 245,
      }}
    >
      <CardActionArea
        sx={{
          position: "relative",
          "&:hover .content": {
            visibility: "visible",
          },
        }}
        onClick={handleAddToFront}
      >
        <CardMedia
          component="img"
          height="200"
          image={img}
          alt="green iguana"
          sx={{
            backgroundPosition: "center",
            objectFit: "cover",
          }}
        />
        <CardContent
          className="content"
          sx={{
            position: "absolute",
            bottom: "50%",
            right: "50%",
            transform: "translate(50%, 50%)",
            visibility: "hidden",
          }}
        >
          <PlayCircleOutlineIcon
            sx={{
              color: "#fff",
              fontSize: "3rem",
              opacity: 0.6,
            }}
          />
        </CardContent>
      </CardActionArea>
      <Typography
        gutterBottom
        variant="p"
        component="div"
        sx={{
          textAlign: "center",
          color: theme.palette.secondary.main,
        }}
      >
        {title}
      </Typography>
    </Card>
  );
};

export default SearchBarCard;
