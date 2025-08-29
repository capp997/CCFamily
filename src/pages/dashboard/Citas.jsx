import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Box, Typography } from "@mui/material";

export default function Citas() {
  const [citas, setCitas] = useState([]);
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");

  const citasCollection = collection(db, "citas");

  const fetchCitas = async () => {
    const data = await getDocs(citasCollection);
    setCitas(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => { fetchCitas(); }, []);

  const agregarCita = async () => {
    if (!nombre || !fecha) return;
    await addDoc(citasCollection, { nombre, fecha });
    setNombre("");
    setFecha("");
    fetchCitas();
  };

  const eliminarCita = async (id) => {
    await deleteDoc(doc(db, "citas", id));
    fetchCitas();
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Gestión de Citas</Typography>
      <Box sx={{ mb: 2 }}>
        <TextField label="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} sx={{ mr: 2 }} />
        <TextField type="date" label="Fecha" InputLabelProps={{ shrink: true }} value={fecha} onChange={e => setFecha(e.target.value)} sx={{ mr: 2 }} />
        <Button variant="contained" color="primary" onClick={agregarCita}>Agregar</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {citas.map(cita => (
              <TableRow key={cita.id}>
                <TableCell>{cita.nombre}</TableCell>
                <TableCell>{cita.fecha}</TableCell>
                <TableCell>
                  <Button variant="contained" color="error" onClick={() => eliminarCita(cita.id)}>Eliminar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
