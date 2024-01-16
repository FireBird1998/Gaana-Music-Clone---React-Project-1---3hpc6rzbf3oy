import React, {useContext, useEffect} from 'react'
import Carosel from './Carosel'
import { Box } from '@mui/material'

import { HeroSectionContext } from './Context/HeroContext';

const HeroSection = () => {
  
  const { albums, setAlbums } = useContext(HeroSectionContext);
  

  useEffect(() => {
    const fetchAlbum = async () => {
      const res = await fetch(
        "https://academics.newtonschool.co/api/v1/music/album",
        {
          headers: {
            projectId: "f104bi07c49",
          },
        }
      );
      const data = await res.json();
      setAlbums(data.data);
      
    };
    fetchAlbum();
  }, []);

  console.log(albums);  

  return (
    <Box sx={{
      width: '90vw',
      overflow: 'hidden',
    }}>
      <Carosel/>
    </Box>
    
  )
}

export default HeroSection