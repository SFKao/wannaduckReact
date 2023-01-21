import { Grid } from "@mui/material";
import React from "react";
import GenresList from "../genresList/GenresList";
import ListaJuegosGenero from "../listaJuegosGenero/ListaJuegosGenero";

const ListaGenero = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <ListaJuegosGenero />
      </Grid>
      <Grid item xs={2}>
        <GenresList />
      </Grid>
    </Grid>
  );
};

export default ListaGenero;
