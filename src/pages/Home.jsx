import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}>
        <Typography variant="h2" gutterBottom>
          Bienvenido 🌱
        </Typography>
        <Typography variant="h6" gutterBottom>
          Explora proyectos, contacta y administra desde el dashboard
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/projects"
          sx={{ mt: 2 }}
        >
          Ver Proyectos
        </Button>
      </motion.div>
    </Container>
  );
}
