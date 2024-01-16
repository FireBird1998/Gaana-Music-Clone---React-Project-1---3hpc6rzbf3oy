"use client"

import React, { createContext, useState } from 'react';

// Create a Context
export const HeroSectionContext = createContext();

// Create a Context Provider component
export const HeroSectionProvider = ({ children }) => {
  const [albums, setAlbums] = useState([]); // or initial state

  return (
    <HeroSectionContext.Provider value={{ albums, setAlbums }}>
      {children}
    </HeroSectionContext.Provider>
  );
};
