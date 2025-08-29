import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <Container sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        ¡Gracias por tu mensaje! 🎉
      </Typography>
      <Typography gutterBottom>
        Te responderemos lo antes posible.
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary" sx={{ mt: 2 }}>
        Volver al inicio
      </Button>
    </Container>
  );
}
