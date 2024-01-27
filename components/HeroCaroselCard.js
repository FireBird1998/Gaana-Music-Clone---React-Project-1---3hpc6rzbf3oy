import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { useRouter } from "next/navigation";

const HeroCaroselCard = ({ img, title, id }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/album/${id}`);
  };
  return (
    <Card
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          image={img}
          alt={title}
          sx={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        />
      </CardActionArea>
    </Card>
  );
};

export default HeroCaroselCard;
