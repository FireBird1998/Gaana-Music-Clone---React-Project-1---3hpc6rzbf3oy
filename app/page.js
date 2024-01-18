"use client"


import { Box, Typography } from "@mui/material"
import HeroSection from "@/components/HeroSection"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { HeroSectionProvider } from '@/components/Context/HeroContext';




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
      

    </Box>
    
  )
}

export default Home
