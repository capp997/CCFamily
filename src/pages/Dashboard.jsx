import React from "react";
import { Container, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Ene", visitas: 400 },
  { name: "Feb", visitas: 300 },
  { name: "Mar", visitas: 500 },
  { name: "Abr", visitas: 200 },
];

export default function Dashboard() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="visitas" stroke="#4caf50" />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}
