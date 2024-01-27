"use client"


import { Box, Typography } from "@mui/material"
import HeroSection from "@/components/HeroSection"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { HeroSectionProvider } from '@/components/Context/HeroContext';
import HomeBody from "@/components/Home/HomeBody"




const Home = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      

    }}>  
      <HeroSectionProvider>
        <HeroSection/>
      </HeroSectionProvider>
      <HomeBody  />
      


      

    </Box>
    
  )
}

export default Home
