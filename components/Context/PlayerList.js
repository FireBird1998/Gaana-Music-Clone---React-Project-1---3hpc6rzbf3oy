"use client";

import React, { createContext, useState } from "react";

export const PlayerList = createContext();

export function PlayerListProvider({ children }) {
  const [players, setPlayers] = useState([]);

  // Add a song to the front of the playlist
  const addToFront = (song) => {
    setPlayers((prevPlayers) => {
      const newPlayers = [song, ...prevPlayers];
      console.log(newPlayers);
      return newPlayers;
    });
  };

  // Clear the playlist
  const clearPlaylist = () => {
    setPlayers(() => {
      const newPlayers = [];
      console.log(newPlayers);
      return newPlayers;
    });
  };

  // Add a song to the end of the playlist
  const addToLast = (song) => {
    setPlayers((prevPlayers) => {
      const newPlayers = [...prevPlayers, song];
      console.log(newPlayers);
      return newPlayers;
    });
  };

  return (
    <PlayerList.Provider
      value={{ players, setPlayers, addToFront, clearPlaylist, addToLast }}
    >
      {children}
    </PlayerList.Provider>
  );
}
