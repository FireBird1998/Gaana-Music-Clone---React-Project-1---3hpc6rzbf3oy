"use client"


import { Box } from "@mui/material"
import HeroSection from "@/components/HeroSection"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { HeroSectionProvider } from '@/components/Context/HeroContext';




const Home = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '30vh',
      backgroundColor: '',
    }}>
      <HeroSectionProvider>
        <HeroSection/>
      </HeroSectionProvider>
      

    </Box>
    
  )
}

export default Home
