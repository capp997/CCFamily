import React from "react";
import Banner from "../components/Banner";
import { Container, Typography, Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Banner />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Bienvenido a C&C Family
        </Typography>
        <Typography variant="body1">
          Descubre nuestros proyectos y servicios de paisajismo y jardinería.
        </Typography>
        <Box sx={{ mt: 4 }}>
          {/* Aquí puedes agregar secciones de proyectos destacados */}
        </Box>
      </Container>
    </>
  );
}
