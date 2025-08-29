import React, { useState } from "react";
import { Container, Typography, TextField, Button, Alert } from "@mui/material";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form }),
    })
      .then(() => {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => alert(error));
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Contáctame
      </Typography>

      {submitted && (
        <Alert severity="success" sx={{ mb: 2 }}>
          ¡Gracias por tu mensaje! 🎉 Te responderemos pronto.
        </Alert>
      )}

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <TextField
          fullWidth
          label="Nombre"
          name="name"
          value={form.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Correo"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Mensaje"
          name="message"
          multiline
          rows={4}
          margin="normal"
          value={form.message}
          onChange={handleChange}
        />

        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Enviar
        </Button>
      </form>
    </Container>
  );
}
