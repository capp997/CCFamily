import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Mensaje enviado (simulación)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Contáctame
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth label="Nombre" name="name"
          value={form.name} onChange={handleChange} margin="normal"
        />
        <TextField
          fullWidth label="Correo" name="email"
          value={form.email} onChange={handleChange} margin="normal"
        />
        <TextField
          fullWidth label="Mensaje" name="message"
          value={form.message} onChange={handleChange} multiline rows={4} margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Enviar
        </Button>
      </form>
    </Container>
  );
}
