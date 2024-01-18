"use client"

import React, {useEffect} from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useTheme } from '@mui/material/styles';

const Player = ({}) => {

  const theme = useTheme();
  useEffect(() => {
    const style = document.createElement('style');
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
  
  

  return (
    <AudioPlayer
    src="https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf908947ae38c3e33a1994.mp3"
    onPlay={e => console.log("onPlay")}
    // other props here 
    />
)};

export default Player