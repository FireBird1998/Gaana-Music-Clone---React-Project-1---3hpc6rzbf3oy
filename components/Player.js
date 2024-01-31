"use client";

import React, { useEffect, useContext, useState, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { PlayerList } from "./Context/PlayerList";
import { AuthContext } from "./Context/AuthContex";
import LikeSongComponent from "./UserComponent/LikeSongComponent";

const Player = () => {
  const theme = useTheme();
  const { players } = useContext(PlayerList);
  const authContex = useContext(AuthContext);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const playerRef = useRef();
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .rhap_container {
        background: ${theme.palette.background.default};
      }
      .rhap_main-controls-button svg {
        color: ${theme.palette.secondary.main};
      }
      .rhap_progress-filled, .rhap_progress-indicator {
        background-color: ${theme.palette.secondary.main};
      }
      .rhap_button-clear.rhap_volume-button {
        color: ${theme.palette.secondary.main};
      }
      .rhap_volume-bar, .rhap_volume-indicator {
        background-color: ${theme.palette.secondary.main};
      }
    `;
    document.head.appendChild(style);

    // Clean up on unmount
    return () => {
      document.head.removeChild(style);
    };
  }, [theme]);

  // Play the first song whenever the players array changes
  useEffect(() => {
    if (players.length === 0) {
      setCurrentTrackIndex(0);
    }

    if (
      players.length > 0 &&
      playerRef.current &&
      playerRef.current.audio.current
    ) {
      setCurrentTrackIndex(0);
      playerRef.current.audio.current.play();
    }
  }, [players]);

  const handleNext = () => {
    setCurrentTrackIndex((currentTrackIndex + 1) % players.length);
  };

  const handlePrevious = () => {
    setCurrentTrackIndex(
      (currentTrackIndex - 1 + players.length) % players.length
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Box
        sx={{
          padding: 1,
          bgcolor: theme.palette.background.paper,
        }}
      >
        {players.length > 0 && (
          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            minWidth: 200

          }}>
            <SongCard
              img={players[currentTrackIndex].thumbnail}
              title={players[currentTrackIndex].title}
            />
            <Typography variant="p" component="p" sx={{ fontSize: '0.7rem', }}>
              {`${players[currentTrackIndex].title}`}
              
            </Typography>
            {authContex.isUserAuthenticated() && (<LikeSongComponent id={players[currentTrackIndex]._id}/>)}

          </Box>
        )}
      </Box>
      <AudioPlayer
        src={players[currentTrackIndex]?.audio_url}
        onPlay={(e) => console.log("onPlay")}
        onEnded={handleNext}
        onClickNext={handleNext}
        onClickPrevious={handlePrevious}
        showSkipControls
        autoPlayAfterSrcChange
      />
    </Box>
  );
};

export default Player;

const SongCard = ({ img, title }) => {
  return (
    <Card
      sx={{
        maxWidth: 74,
        maxHeight: 74,
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image={img} alt={title} />
      </CardActionArea>
    </Card>
  );
};
