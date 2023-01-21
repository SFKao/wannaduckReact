import React, { useEffect, useState } from "react";
import TarjetaJuego from "../tartejaJuego/TarjetaJuego";
import { Button, Grid } from "@mui/material";
import { useParams } from "react-router-dom";

const ListaJuegosGenero = () => {


    const { genre } = useParams();
 const [juegos, setJuegos] = useState([]);
  const [pag, setPag] = useState(1);

  const loadGames = async () => {
    const url = `https://api.rawg.io/api/games?key=5dbb137cfae446feb3caaba262996ed3&page_size=30&page=${pag}&genres=${genre}`
    let data = await fetch(url);
    data = await data.json();
    //let data = jsonDePrueba;
    setJuegos(juegos.concat(data.results));
  }

  useEffect(()=>{
    loadGames();
    setPag(2);
  },[])

  const handleCargarMas = () => {
    setPag(pag+1)
    loadGames();
  }
  return (
    
    ((()=>{
      if(!juegos)
      return <div>CARGANDO</div>
    else
      return <><Grid container spacing={1} sx={{ padding: 2, width: "auto" }}>
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
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "16px" }}
            onClick={handleCargarMas}
          >
            Cargar mas
          </Button>
      </ >
    })())
  );
};

export default ListaJuegosGenero;