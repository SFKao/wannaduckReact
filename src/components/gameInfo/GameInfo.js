import React, {useState, useEffect} from "react";
import { useParams} from "react-router-dom";
import { Grid, Typography, CardMedia, Rating, Button, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PieChartComponent from "../pieChartComponent/PieChartComponent";
import juegoPrueba from "../../assets/juegoPrueba.json"

const GameInfo = () => {
  const { game } = useParams();
  /*
  let juego = jsonDePrueba.results.filter((obj) => {
    return obj.slug === game;
  })[0];
  */
  const [juego, setJuego] = useState(null);
  const loadGames = async () => {
    const url = `https://api.rawg.io/api/games/${game}?key=5dbb137cfae446feb3caaba262996ed3`
    let data = await fetch(url);
    data = await data.json();
    setJuego(data);
  }

  useEffect(() => {
    loadGames();
  }, [])

  return (

    ((()=>{
    if(!juego)
      return <div>CARGANDO</div>
    else
      return<Grid container spacing={2}>
        <Grid item sm={8} xs={12}>
          <CardMedia
            component="img"
            height="600"
            image={juego.background_image}
          />
        </Grid>
        <Grid item sm={4} xs={12} justifyContent="center">
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            sx={{ color: "primary.main" }}
            justifyContent="center"
            marginTop={5}
          >
            {juego.name}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "primary.white" }}
          >
            {juego.released}
          </Typography>
          <Rating
            name="half-rating-read"
            defaultValue={juego.rating}
            precision={0.5}
            readOnly
          />

        <Box height={200}>
          < PieChartComponent labels = {
            [5, 4, 3, 2, 1]
          }
          datasets = {
            [{
              data: [
                juego.ratings.find(e => e.id === 5) ? juego.ratings.find(e => e.id === 5).count : 0,
                juego.ratings.find(e => e.id === 4) ? juego.ratings.find(e => e.id === 4).count : 0,
                juego.ratings.find(e => e.id === 3) ? juego.ratings.find(e => e.id === 3).count : 0,
                juego.ratings.find(e => e.id === 2) ? juego.ratings.find(e => e.id === 2).count : 0,
                juego.ratings.find(e => e.id === 1) ? juego.ratings.find(e => e.id === 1).count : 0
              ],
              backgroundColor: ["	#2cba00", "#a3ff00", "#fff400", "#ffa700", "	#ff0000"]
            }]
          }
          />   </Box >

          <div>
            <Button
              size="large"
              color="primary"
              variant="contained"
              sx={{ color: "primary.white" }}
            >
              Favoritos
              <FavoriteIcon />
            </Button>
          </div>

          <Typography
            gutterBottom
            component="div"
            sx={{ color: "primary.white" }}
            justifyContent="center"
            marginTop={2}
            //No se porque me pasa al descripcion en html puro, ole
            dangerouslySetInnerHTML={{__html: juego.description}}
          />

 
        


          {juego.platforms.map((j) => {
            return (
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ color: "primary.white" }}
              >
                {j.platform.name}
              </Typography>
            );
          })}
        </Grid>
        {/*
          //PORQUE ME MANDAS FOTOS SI PIDO TODOS PERO SI PIDO UNO NO AAAAAAAAAAAAAAAA
          <Grid item xs={12}>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ color: "primary.white" }}
          >
            Capturas
          </Typography>
        </Grid>
          {juego.short_screenshots.map((j) => {
            return (
              <Grid item sm={6} xs={12}>
                <CardMedia component="img" height="400" image={j.image} />
              </Grid>
            );
          })}
        */}
      </Grid>
    })())
    
      
    
  );
};

export default GameInfo;
