"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContex";

export const FavouriteSongsContext = createContext();
const { Provider } = FavouriteSongsContext;

export const FavouriteSongsProvider = ({ children }) => {
  const [songs, setSongs] = useState([]); 
  const authContext = useContext(AuthContext);


  useEffect(() => {
    if (authContext.isUserAuthenticated()) {
        const token = authContext.authState.token; // Get the token from your AuthContext

        fetch('https://academics.newtonschool.co/api/v1/music/favorites/like', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'projectID': 'f104bi07c49' 
            }
        })
        .then(response => response.json())
        .then(data => setSongs(data.songs)) // Update the songs state with the fetched data
        .catch(error => console.error('Error:', error));
    }
  }, [authContext]);

  

  return (
    <Provider
      value={{
        songs,
        setSongs,
        addSong: (song) => setSongs([...songs, song]),
        removeSong: (song) => setSongs(songs.filter((s) => s.id !== song.id)),
        clearSongs: () => setSongs([]),
      }}
    >
      {children}
    </Provider>
  );
};
