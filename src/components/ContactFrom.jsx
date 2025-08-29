import React, { useState } from "react";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // aquí llamas a Netlify Forms o API para enviar el email
    setSuccess(true);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField label="Name" fullWidth required sx={{ mb: 2 }} />
      <TextField label="Email" type="email" fullWidth required sx={{ mb: 2 }} />
      <TextField label="Message" multiline rows={4} fullWidth required sx={{ mb: 2 }} />
      <Button type="submit" variant="contained" color="success">Send</Button>
      {success && <Alert severity="success" sx={{ mt: 2 }}>Mensaje enviado correctamente!</Alert>}
    </Box>
  );
}
