import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      sx={{
        width: "100%",
        height: "250px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #4caf50, #81c784)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontWeight: "bold", textShadow: "2px 2px 8px rgba(0,0,0,0.3)" }}
      >
        C&C Family
      </Typography>
    </Box>
  );
}
