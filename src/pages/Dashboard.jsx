import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Ene", visitas: 30 },
  { name: "Feb", visitas: 45 },
  { name: "Mar", visitas: 60 },
  { name: "Abr", visitas: 80 },
];

export default function Dashboard() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Dashboard 📊
      </Typography>
      <Paper sx={{ p: 2 }}>
        <LineChart width={400} height={250} data={data}>
          <Line type="monotone" dataKey="visitas" stroke="#1976d2" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </Paper>
    </Container>
  );
}
