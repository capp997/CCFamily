import React from "react";
import { Typography, Container } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Bienvenido a la Home
      </Typography>
      <Typography>
        Esta es la página principal de tu sitio web con Material UI.
      </Typography>
    </Container>
  );
}
