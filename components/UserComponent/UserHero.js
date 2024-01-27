import React from 'react'
import { Box, Avatar, Typography } from '@mui/material'


const UserHero = ({name}) => {
  return (
    <Box sx={{
        width: '100%',
        height: '30vh',
       
    }}>
        <Box sx={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '1rem',

        }}>
            <Avatar sx={{
                width: '100px',
                height: '100px',
                border: '2px solid #fff'
            }}>
                {name[0].toUpperCase()}
            </Avatar>
            <Box sx={{
               
                color: '#fff',
                fontWeight: '600',
                fontSize: '1.5rem'
            }}>
               <Typography variant='h3' >Hello! {name}. Welcome to your Liked Songs</Typography> 
            </Box>

        </Box>
        
    </Box>
  )
}

export default UserHero