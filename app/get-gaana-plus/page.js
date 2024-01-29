"use client";

import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import Paper from "@mui/material/Paper";

import { useTheme } from "@mui/material/styles";

const getGaanaPlus = () => {
  const theme = useTheme();

  const tiers = [
    {
      title: "1 Month Ganna Plus",
      price: "99",
      description: ["Ganna Plus"],
      buttonText: "Buy Now",
      buttonVariant: "outlined",
    },
    {
      title: "6 Month Ganna Plus",
      subheader: "Most popular",
      price: "249",
      description: [
       "Ganna Plus"
      ],
      buttonText: "Buy Now",
      buttonVariant: "contained",
    },
    {
      title: "1 Year Ganna Plus",
      price: "549",
      description: [
        "Ganna Plus"
      ],
      buttonText: "Buy now",
      buttonVariant: "outlined",
    },
  ];
  return (
    <>
      {HeroCard()}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
              sx={{
                mb: 10,
              }}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      &#8377;{tier.price}
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} sx={{
                    color: theme.palette.secondary.main,
                    borderColor: theme.palette.secondary.main,
                    '&:hover': {
                      borderColor: theme.palette.secondary.main,
                    }
                  }} >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

const HeroCard = () => {
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('assets/redbackground.png')`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {/* {<img style={{ display: 'none' }} src='assets/redbackground.png' alt={`background`} />} */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.1)",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Gaana Plus
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Enjoy ad-free access to india's smallest collection of songs.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default getGaanaPlus;

// return (
//   <Grid item xs={12} md={6}>
//     <CardActionArea component="a" href="#">
//       <Card sx={{ display: 'flex' }}>
//         <CardContent sx={{ flex: 1 }}>
//           <Typography component="h2" variant="h5">
//             Gaana Plus
//           </Typography>
//           <Typography variant="subtitle1" color="text.secondary">
//             Available on anroid and apple
//           </Typography>
//           <Typography variant="h5">
//             Music Without limits
//           </Typography>
//           <Typography variant="subtitle1" paragraph>
//             Enjoy ad-free access to india's smallest collection of songs.
//           </Typography>
//         </CardContent>
//         <CardMedia
//           component="img"
//           sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
//           image="/assets/redbackground.png"
//           alt={`background`}
//         />
//       </Card>
//     </CardActionArea>
//   </Grid>
// )
