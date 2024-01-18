import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const TrackDisplay = ({tracks}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Track</TableCell>
            <TableCell align="left">Artists</TableCell>
            <TableCell align="center">Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tracks.map((track) => {
            console.log(track._id, track.thumbnail, track.artist[0].name)
            return (
            <TableRow
              key={track._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              onClick={() => {}}
            >
              <TableCell component="th" scope="row" sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                {songCard(track.thumbnail, track.title)}
                {track.title}
              </TableCell>
              <TableCell align="left">{track.artist[0].name}</TableCell>
              <TableCell align="center">no data</TableCell>
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
  );
};


const songCard = (img, title) => (
    <Card sx={{ 
        width: 48,
        height: 48,
        }}>
      <CardActionArea sx={{
        position: 'relative',
      }}>
        <CardMedia
          component="img"
          height="48"
          width="48"
          image={img}
          alt={title}
        />
        <CardContent sx={{
            position: 'absolute',
        }}>
          
        </CardContent>
      </CardActionArea>
    </Card>
)


export default TrackDisplay;
