"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContex";
import toast from "react-hot-toast";

export const FavouriteSongsContext = createContext();
const { Provider } = FavouriteSongsContext;

export const FavouriteSongsProvider = ({ children }) => {
  const [favoriteSongs, setFavouriteSongs] = useState([]); 
  const authContext = useContext(AuthContext);

  const updateFavoriteSongs = async () => {
    if (authContext.isUserAuthenticated()) {
      const token = authContext.authState.token; // Get the token from your AuthContext

      fetch('https://academics.newtonschool.co/api/v1/music/favorites/like', {
          method: 'GET',
          headers: {
              'Authorization': `Bearer ${token}`,
              'projectID': 'f104bi07c49',
              'Content-Type': 'application/json' 
          }
      })
      .then(response => response.json())
      .then(data => {
        
        console.log(data.data.songs);
        
        setFavouriteSongs(data.data.songs)
      }) // Update the songs state with the fetched data
      .catch(error => console.error('Error:', error));
    }
  }

  const favoriteHandler = async (id) => {
    try {
      const response = await fetch(`https://academics.newtonschool.co/api/v1/music/favorites/like`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${authContext.authState.token}`,
          projectId: 'f104bi07c49',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ songId: id }),
      })
      if (!response.ok) {
        toast.error('There was a error during adding/removing songs')
        throw new Error('Something went wrong during setting up of favorite.')
      }
      const data = await response.json()
      toast.success(data.message);
      updateFavoriteSongs(); // Update the favorite songs after the favoriteHandler function runs
    } catch (err) {
      console.error(err.message)
    } 
  }


  useEffect(() => {
    if (authContext.isUserAuthenticated()) {
        const token = authContext.authState.token; // Get the token from your AuthContext
  
        fetch('https://academics.newtonschool.co/api/v1/music/favorites/like', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'projectID': 'f104bi07c49',
                'Content-Type': 'application/json' 
            }
        })
        .then(response => response.json())
        .then(data => setFavouriteSongs(data.data.songs)) // Update the songs state with the fetched data
        .catch(error => console.error('Error:', error));
    }
  }, [authContext]);

  return (
    <Provider
      value={{
        favoriteSongs,
        favoriteHandler, 
      }}
    >
      {children}
    </Provider>
  );
};

