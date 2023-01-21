import React from "react";
import { Box, Stack, ThemeProvider } from "@mui/system";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import Tema from "../../themes/Tema";
import HomeIcon from "@mui/icons-material/Home";

import Duck from "../../assets/duck.png";
import Duck80s from "../../assets/80s Duck.png";
import DuckClosed from "../../assets/web closed.png";

const Error = () => {
  return (
    <ThemeProvider theme={Tema}>
      <Stack
        direction="column"
        spacing={2}
        alignItems="center"
        sx={{ backgroundColor: "fondo.main" }}
      >
        {(() => {
          switch (Math.floor(Math.random() * 3)) {
            case 0:
              return (
                <>
                  <img width={300} height={300} src={Duck} />
                  <Box sx={{ color: "primary.main" }}>
                    <p>Cuacktastico, te has alejado de la web.</p>
                  </Box>
                </>
              );
            case 1:
              return (
                <>
                  <img width={300} height={600} src={Duck80s} />
                  <Box sx={{ color: "primary.main" }}>
                    <p>Vuelta al futuro.</p>
                  </Box>
                </>
              );
            case 2:
              return (
                <>
                  <img width={300} height={500} src={DuckClosed} />
                  <Box sx={{ color: "primary.main" }}>
                    <p>Web's closed.</p>
                  </Box>
                </>
              );
            default:
              return <p>CUACK</p>;
          }
        })()}
        <NavLink to="/">
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "16px" }}
            startIcon={<HomeIcon />}
          >
            Volver al inicio
          </Button>
        </NavLink>
      </Stack>
    </ThemeProvider>
  );
};

export default Error;
