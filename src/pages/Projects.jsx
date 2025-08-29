import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

export default function Projects() {
  const projects = [
    { title: "Jardín Zen", description: "Diseño minimalista con piedras y plantas" },
    { title: "Terraza Verde", description: "Espacio verde en terraza urbana" },
    { title: "Parque Familiar", description: "Áreas de recreación y jardín" },
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Proyectos</Typography>
      <Grid container spacing={2}>
        {projects.map((p, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <Card>
              <CardContent>
                <Typography variant="h6">{p.title}</Typography>
                <Typography>{p.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
