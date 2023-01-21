import React from "react";
import TarjetaJuego from "../tartejaJuego/TarjetaJuego";
import jsonDePruebaTexto from "../../assets/jsonDePrueba.json";
import { Grid } from "@mui/material";
const ListaJuegos = () => {
  return (
    <Grid container spacing={1} sx={{ padding: 2, width: "auto" }}>
      {jsonDePrueba.results.map(({ background_image, name, rating, slug }) => (
        <Grid item xs={6} sm={4} lg={2} sx={{ padding: 2 }}>
          <TarjetaJuego
            backgroundImage={background_image}
            name={name}
            rating={rating}
            slug={slug}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListaJuegos;

const jsonDePrueba = jsonDePruebaTexto;
