import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Container from "@mui/material/Container";
import { Box, Divider, useTheme } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

const Footer = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="lg"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 8,
        py: [3, 6],
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        Bas Bajna Chahiye Gaana Music Clone 🎵
      </Typography>

      <Divider sx={{ my: 5 }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FacebookIcon
          sx={{
            color: theme.palette.secondary.main,
            fontSize: "2rem",
            mr: 2,
          }}
        />
      </Box>
      <Divider sx={{ my: 4 }} />
      <Grid container spacing={4} justifyContent="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="secondary.main" gutterBottom>
              {footer.title}
            </Typography>
            <ul>
              {footer.description.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    style={{
                      color: theme.palette.secondary.main,
                      textDecoration: "none",
                      fontSize: "0.9rem",
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      {Copyright(theme)}
    </Container>
  );
};

export default Footer;

function Copyright(theme) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: 5 }}
    >
      {"Copyright © "}
      <Link
        href="https://ankitdas98.com/"
        target="_blank"
        style={{
          color: theme.palette.secondary.main,
          textDecoration: "none",
          fontSize: "0.9rem",
        }}
      >
        FireBird
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
