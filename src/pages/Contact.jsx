import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Contáctame
      </Typography>

      <form 
        name="contact" 
        method="POST" 
        data-netlify="true" 
        netlify-honeypot="bot-field"
        action="/thanks.html"  // <-- redirige a la página de gracias
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <TextField
          fullWidth label="Nombre" name="name"
          value={form.name} onChange={handleChange} margin="normal"
        />
        <TextField
          fullWidth label="Correo" name="email"
          type="email"
          value={form.email} onChange={handleChange} margin="normal"
        />
        <TextField
          fullWidth label="Mensaje" name="message"
          multiline rows={4} margin="normal"
          value={form.message} onChange={handleChange}
        />

        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Enviar
        </Button>
      </form>
    </Container>
  );
}
