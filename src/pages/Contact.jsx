import React from "react";
import { Typography, Container, TextField, Button } from "@mui/material";

export default function Contact() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Contacto
      </Typography>
      <TextField fullWidth label="Nombre" margin="normal" />
      <TextField fullWidth label="Correo" margin="normal" />
      <TextField fullWidth label="Mensaje" multiline rows={4} margin="normal" />
      <Button variant="contained" color="primary">
        Enviar
      </Button>
    </Container>
  );
}
