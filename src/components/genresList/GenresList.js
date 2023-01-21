import { Button, ThemeProvider } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import Tema from "../../themes/Tema";

const GenresList = () => {
  return (
    <ThemeProvider theme={Tema}>
      <Stack
        spacing={2}
        padding={1}
        sx={{ borderLeft: "2px solid #ff8000", borderRadius: 5 }}
      >
        <NavLink style={{ textDecoration: "none" }} to="/genres/action">
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "24px", width: "100%" }}
          >
            Acción
          </Button>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/genres/indie">
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "24px", width: "100%" }}
          >
            Indie
          </Button>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/genres/rpg">
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "24px", width: "100%" }}
          >
            RPG
          </Button>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/genres/strategy">
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "24px", width: "100%" }}
          >
            Estrategia
          </Button>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/genres/shooter">
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "24px", width: "100%" }}
          >
            Shooter
          </Button>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/genres/casual">
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "24px", width: "100%" }}
          >
            Casual
          </Button>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/genres/simulation">
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "24px", width: "100%" }}
          >
            Simulación
          </Button>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/genres/puzzle">
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "24px", width: "100%" }}
          >
            Puzzles
          </Button>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/genres/arcade">
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "24px", width: "100%" }}
          >
            Arcade
          </Button>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/genres/platformer">
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "24px", width: "100%" }}
          >
            Plataformas
          </Button>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/genres/racing">
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "24px", width: "100%" }}
          >
            Carreras
          </Button>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/genres/mmo">
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "24px", width: "100%" }}
          >
            MMO
          </Button>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/genres/sports">
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "24px", width: "100%" }}
          >
            Deportes
          </Button>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/genres/fighting">
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "24px", width: "100%" }}
          >
            Lucha
          </Button>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/genres/family">
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "24px", width: "100%" }}
          >
            Familiares
          </Button>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/genres/board-games">
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "24px", width: "100%" }}
          >
            Juegos de mesa
          </Button>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/genres/adventure">
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "24px", width: "100%" }}
          >
            Aventura
          </Button>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/genres/card">
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "24px", width: "100%" }}
          >
            Cartas
          </Button>
        </NavLink>
      </Stack>
    </ThemeProvider>
  );
};

export default GenresList;
