import { Grid } from '@mui/material'
import React from 'react'
import GenresList from '../genresList/GenresList'
import ListaJuegos from '../listaJuegos/ListaJuegos'

const ListaTodo = () => {
  return (
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <ListaJuegos/>
        </Grid>
        <Grid item xs={2}>
          <GenresList/>
        </Grid>
      </Grid>
  )
}

export default ListaTodo