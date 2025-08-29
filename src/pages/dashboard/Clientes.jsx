import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Box, Typography } from "@mui/material";

export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");

  const clientesCollection = collection(db, "clientes");

  const fetchClientes = async () => {
    const data = await getDocs(clientesCollection);
    setClientes(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => { fetchClientes(); }, []);

  const agregarCliente = async () => {
    if (!nombre || !telefono) return;
    await addDoc(clientesCollection, { nombre, telefono });
    setNombre("");
    setTelefono("");
    fetchClientes();
  };

  const eliminarCliente = async (id) => {
    await deleteDoc(doc(db, "clientes", id));
    fetchClientes();
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Gestión de Clientes</Typography>
      <Box sx={{ mb: 2 }}>
        <TextField label="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} sx={{ mr: 2 }} />
        <TextField label="Teléfono" value={telefono} onChange={e => setTelefono(e.target.value)} sx={{ mr: 2 }} />
        <Button variant="contained" color="primary" onClick={agregarCliente}>Agregar</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Teléfono</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientes.map(cliente => (
              <TableRow key={cliente.id}>
                <TableCell>{cliente.nombre}</TableCell>
                <TableCell>{cliente.telefono}</TableCell>
                <TableCell>
                  <Button variant="contained" color="error" onClick={() => eliminarCliente(cliente.id)}>Eliminar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
