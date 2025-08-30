import React, { useState } from "react";
import { Box, List, ListItem, ListItemButton, ListItemText, Divider } from "@mui/material";
import Home from "./dashboard/Home";
import Citas from "./dashboard/Citas";
import Usuarios from "./dashboard/Usuarios";
import Clientes from "./dashboard/Clientes";
import Proyectos from "./dashboard/Proyectos";

export default function Dashboard() {
  const [pagina, setPagina] = useState("home");

  const renderPagina = () => {
    switch (pagina) {
      case "home": return <Home />;
      case "citas": return <Citas />;
      case "usuarios": return <Usuarios />;
      case "clientes": return <Clientes />;
      case "proyectos": return <Proyectos />;
      default: return <Home />;
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box sx={{ width: 240, bgcolor: "success.main", color: "white", p: 2 }}>
        <h2>C&C Family</h2>
        <Divider sx={{ bgcolor: "white", mb: 2 }} />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setPagina("home")}>
              <ListItemText primary="Inicio" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setPagina("citas")}>
              <ListItemText primary="Citas" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setPagina("usuarios")}>
              <ListItemText primary="Usuarios" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setPagina("clientes")}>
              <ListItemText primary="Clientes" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setPagina("proyectos")}>
              <ListItemText primary="Proyectos" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box sx={{ flexGrow: 1, p: 3, overflowY: "auto" }}>
        {renderPagina()}
      </Box>
    </Box>
  );
}
