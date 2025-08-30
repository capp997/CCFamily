import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
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
  Typography,
} from "@mui/material";

const Proyectos = () => {
  const [proyectos, setProyectos] = useState([]);
  const [nuevoProyecto, setNuevoProyecto] = useState({
    nombre: "",
    descripcion: "",
    cliente: "",
  });

  const proyectosCollection = collection(db, "proyectos");

  // Cargar proyectos al iniciar
  useEffect(() => {
    const fetchProyectos = async () => {
      const data = await getDocs(proyectosCollection);
      setProyectos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchProyectos();
  }, []);

  // Agregar nuevo proyecto
  const agregarProyecto = async () => {
    if (!nuevoProyecto.nombre || !nuevoProyecto.descripcion || !nuevoProyecto.cliente) {
      alert("Completa todos los campos");
      return;
    }
    const docRef = await addDoc(proyectosCollection, nuevoProyecto);
    setProyectos([...proyectos, { ...nuevoProyecto, id: docRef.id }]);
    setNuevoProyecto({ nombre: "", descripcion: "", cliente: "" });
  };

  // Eliminar proyecto
  const eliminarProyecto = async (id) => {
    await deleteDoc(doc(db, "proyectos", id));
    setProyectos(proyectos.filter((proy) => proy.id !== id));
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Gestión de Proyectos
      </Typography>

      {/* Formulario para agregar proyectos */}
      <Box mb={3} display="flex" gap={2}>
        <TextField
          label="Nombre del Proyecto"
          value={nuevoProyecto.nombre}
          onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, nombre: e.target.value })}
        />
        <TextField
          label="Descripción"
          value={nuevoProyecto.descripcion}
          onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, descripcion: e.target.value })}
        />
        <TextField
          label="Cliente"
          value={nuevoProyecto.cliente}
          onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, cliente: e.target.value })}
        />
        <Button variant="contained" color="primary" onClick={agregarProyecto}>
          Agregar
        </Button>
      </Box>

      {/* Tabla de proyectos */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {proyectos.map((proy) => (
              <TableRow key={proy.id}>
                <TableCell>{proy.nombre}</TableCell>
                <TableCell>{proy.descripcion}</TableCell>
                <TableCell>{proy.cliente}</TableCell>
                <TableCell>
                  <Button color="error" onClick={() => eliminarProyecto(proy.id)}>
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {proyectos.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No hay proyectos registrados
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Proyectos;
