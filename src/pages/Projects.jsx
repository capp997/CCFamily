import { Typography, Container, Card, CardContent } from "@mui/material";

export default function Projects() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Proyectos
      </Typography>
      <Card sx={{ mb: 2 }}>
        <CardContent>Proyecto 1 - Descripción</CardContent>
      </Card>
      <Card sx={{ mb: 2 }}>
        <CardContent>Proyecto 2 - Descripción</CardContent>
      </Card>
    </Container>
  );
}
