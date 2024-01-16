import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import { FreeMode, Pagination } from "swiper/modules";

const CarocelComponent = ({ img }) => {
  return (
    <Card
      sx={{
        maxWidth: 245,
        height: 200,
        width: 245,
      }}
    >
      <CardActionArea
        sx={{
          position: "relative",
          "&:hover .content": {
            visibility: "visible",
          },
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={img}
          alt="green iguana"
          sx={{}}
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
    </Card>
  );
};

export default CarocelComponent;
