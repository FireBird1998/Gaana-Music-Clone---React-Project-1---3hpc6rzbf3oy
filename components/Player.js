"use client"

import React, { useEffect, useContext, useState, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useTheme } from "@mui/material/styles";

import { PlayerList } from "./Context/PlayerList";

const Player = () => {
  const theme = useTheme();
  const { players } = useContext(PlayerList);
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
    if(players.length === 0){
      setCurrentTrackIndex(0);
    }

    if (players.length > 0 && playerRef.current && playerRef.current.audio.current) {
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
    <AudioPlayer
      src={players[currentTrackIndex]?.audio_url}
      onPlay={(e) => console.log("onPlay")}
      onEnded={handleNext}
      onClickNext={handleNext}
      onClickPrevious={handlePrevious}
      showSkipControls
      autoPlayAfterSrcChange
    />
  );
};

export default Player;
