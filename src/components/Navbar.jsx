import React, { useState } from "react";
import {
  AppBar, Toolbar, Typography, Button, IconButton,
  Drawer, List, ListItem, ListItemText, Box
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>C&C Family</Typography>
      <List>
        {["Home","Projects","Contact","Dashboard"].map(text => (
          <ListItem key={text} disablePadding>
            <Button component={Link} to={text === "Home" ? "/" : `/${text.toLowerCase()}`} sx={{ width: "100%", justifyContent: "flex-start", padding: 1 }}>
              <ListItemText primary={text} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="success">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>C&C Family</Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {["Home","Projects","Contact","Dashboard"].map(text => (
              <Button key={text} color="inherit" component={Link} to={text === "Home" ? "/" : `/${text.toLowerCase()}`}>{text}</Button>
            ))}
          </Box>
          <IconButton color="inherit" edge="end" sx={{ display: { md: "none" } }} onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: { xs: "block", md: "none" } }}>{drawer}</Drawer>
    </>
  );
}
