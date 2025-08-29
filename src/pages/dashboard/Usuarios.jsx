import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Box, Typography } from "@mui/material";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const usuariosCollection = collection(db, "usuarios");

  const fetchUsuarios = async () => {
    const data = await getDocs(usuariosCollection);
    setUsuarios(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => { fetchUsuarios(); }, []);

  const agregarUsuario = async () => {
    if (!nombre || !email) return;
    await addDoc(usuariosCollection, { nombre, email });
    setNombre("");
    setEmail("");
    fetchUsuarios();
  };

  const eliminarUsuario = async (id) => {
    await deleteDoc(doc(db, "usuarios", id));
    fetchUsuarios();
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Gestión de Usuarios</Typography>
      <Box sx={{ mb: 2 }}>
        <TextField label="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} sx={{ mr: 2 }} />
        <TextField label="Email" value={email} onChange={e => setEmail(e.target.value)} sx={{ mr: 2 }} />
        <Button variant="contained" color="primary" onClick={agregarUsuario}>Agregar</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usuarios.map(usuario => (
              <TableRow key={usuario.id}>
                <TableCell>{usuario.nombre}</TableCell>
                <TableCell>{usuario.email}</TableCell>
                <TableCell>
                  <Button variant="contained" color="error" onClick={() => eliminarUsuario(usuario.id)}>Eliminar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
