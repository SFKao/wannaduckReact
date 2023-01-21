import React, { useEffect, useState } from "react";
import TarjetaJuego from "../tartejaJuego/TarjetaJuego";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
const BuscarJuego = () => {

    const { game } = useParams();

  const [juegos, setJuegos] = useState([]);
  const loadGames = async () => {
    const url = `https://api.rawg.io/api/games?key=5dbb137cfae446feb3caaba262996ed3&search=${game}`
    let data = await fetch(url);
    data = await data.json();
    //let data = jsonDePrueba;
    setJuegos(juegos.concat(data.results));
  }

  useEffect(()=>{
    loadGames();
  },[])

  return (
    
    ((()=>{
      if(!juegos)
      return <div>CARGANDO</div>
    else
      return <Grid container spacing={1} sx={{ padding: 2, width: "auto" }}>
        {juegos.map(({ background_image, name, rating, slug }) => (
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
    })())
    
    
  );
};

export default BuscarJuego;