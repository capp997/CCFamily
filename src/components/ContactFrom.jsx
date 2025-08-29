import React, { useState } from "react";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Box component="form"
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target;
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(new FormData(form)).toString(),
        }).then(() => setSubmitted(true));
      }}
      sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%", maxWidth: 500, mx: "auto", my: 4 }}
    >
      <input type="hidden" name="form-name" value="contact" />
      <TextField label="Nombre" name="name" required />
      <TextField label="Email" name="email" type="email" required />
      <TextField label="Mensaje" name="message" multiline rows={4} required />
      <Button type="submit" variant="contained" color="success">Enviar</Button>
      {submitted && <Alert severity="success">¡Mensaje enviado correctamente!</Alert>}
    </Box>
  );
}
