import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

const projects = [
  { title: "Proyecto 1", desc: "Descripción del proyecto 1" },
  { title: "Proyecto 2", desc: "Descripción del proyecto 2" },
  { title: "Proyecto 3", desc: "Descripción del proyecto 3" },
];

export default function Projects() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Mis Proyectos
      </Typography>
      <Grid container spacing={2}>
        {projects.map((p, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card sx={{ p: 2, transition: "0.3s", "&:hover": { boxShadow: 6 } }}>
              <CardContent>
                <Typography variant="h5">{p.title}</Typography>
                <Typography variant="body2">{p.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
