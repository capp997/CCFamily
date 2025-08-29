import { Typography, Container, Grid, Paper } from "@mui/material";

export default function Dashboard() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper sx={{ p: 2 }}>Widget 1</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={{ p: 2 }}>Widget 2</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
