import React, { useState, useEffect } from "react";
import { db } from "../../firebase"; // asegúrate que db esté exportado
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Box,
  Typography
} from "@mui/material";

const Citas = () => {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [citas, setCitas] = useState([]);

  const citasCollection = collection(db, "citas");

  // Obtener citas
  const obtenerCitas = async () => {
    const data = await getDocs(citasCollection);
    setCitas(data.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    obtenerCitas();
  }, []);

  // Agregar cita
  const agregarCita = async (e) => {
    e.preventDefault();
    if (!nombre || !fecha) return alert("Completa todos los campos");

    try {
      await addDoc(citasCollection, { nombre, fecha });
      setNombre("");
      setFecha("");
      obtenerCitas(); // refresca la lista
    } catch (err) {
      console.error(err);
      alert("Error al agregar la cita");
    }
  };

  // Eliminar cita
  const eliminarCita = async (id) => {
    try {
      const citaDoc = doc(db, "citas", id);
      await deleteDoc(citaDoc);
      obtenerCitas(); // refresca la lista
    } catch (err) {
      console.error(err);
      alert("Error al eliminar la cita");
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Agregar Cita
      </Typography>
      <Box
        component="form"
        onSubmit={agregarCita}
        sx={{ display: "flex", gap: 2, mb: 4 }}
      >
        <TextField
          label="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <TextField
          label="Fecha"
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          InputLabelProps={{ shrink: true }}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Agregar
        </Button>
      </Box>

      <Typography variant="h6" gutterBottom>
        Lista de Citas
      </Typography>
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
            {citas.map((cita) => (
              <TableRow key={cita.id}>
                <TableCell>{cita.nombre}</TableCell>
                <TableCell>{cita.fecha}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => eliminarCita(cita.id)}
                  >
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {citas.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  No hay citas
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Citas;
