import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const Proyectos = () => {
  const [proyectos, setProyectos] = useState([]);
  const [nuevoProyecto, setNuevoProyecto] = useState({
    nombre: "",
    descripcion: "",
  });

  // Cargar proyectos desde Firestore
  const fetchProyectos = async () => {
    const querySnapshot = await getDocs(collection(db, "proyectos"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProyectos(data);
  };

  useEffect(() => {
    fetchProyectos();
  }, []);

  // Agregar proyecto
  const agregarProyecto = async () => {
    if (!nuevoProyecto.nombre || !nuevoProyecto.descripcion) return;

    await addDoc(collection(db, "proyectos"), nuevoProyecto);
    setNuevoProyecto({ nombre: "", descripcion: "" });
    fetchProyectos();
  };

  // Eliminar proyecto
  const eliminarProyecto = async (id) => {
    await deleteDoc(doc(db, "proyectos", id));
    fetchProyectos();
  };

  return (
    <div>
      <h2>Gestión de Proyectos</h2>

      <div style={{ marginBottom: "1rem" }}>
        <TextField
          label="Nombre del Proyecto"
          value={nuevoProyecto.nombre}
          onChange={(e) =>
            setNuevoProyecto({ ...nuevoProyecto, nombre: e.target.value })
          }
          style={{ marginRight: "1rem" }}
        />
        <TextField
          label="Descripción"
          value={nuevoProyecto.descripcion}
          onChange={(e) =>
            setNuevoProyecto({ ...nuevoProyecto, descripcion: e.target.value })
          }
          style={{ marginRight: "1rem" }}
        />
        <Button variant="contained" onClick={agregarProyecto}>
          Agregar
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {proyectos.map((proyecto) => (
              <TableRow key={proyecto.id}>
                <TableCell>{proyecto.nombre}</TableCell>
                <TableCell>{proyecto.descripcion}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => eliminarProyecto(proyecto.id)}
                  >
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {proyectos.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  No hay proyectos
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Proyectos;
