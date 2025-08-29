import React from "react";
import { Box, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: 'Enero', citas: 12, clientes: 5 },
  { name: 'Febrero', citas: 20, clientes: 10 },
  { name: 'Marzo', citas: 18, clientes: 8 },
];

export default function Home() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Dashboard Inicio</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="citas" fill="#4caf50" />
          <Bar dataKey="clientes" fill="#81c784" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}
