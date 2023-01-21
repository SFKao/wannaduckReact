import React, {useState, useEffect, useContext} from "react";
import { useParams} from "react-router-dom";
import { Grid, Typography, CardMedia, Rating, Button, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PieChartComponent from "../pieChartComponent/PieChartComponent";

import { initializeApp } from "firebase/app";
import {getDatabase,ref,set,get,child,remove} from 'firebase/database';
import { Context } from "../context/Context";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5fvNVD8TGscBrMvQ6OeZSSbdI_AbyJxo",
  authDomain: "reactomelcam934.firebaseapp.com",
  projectId: "reactomelcam934",
  storageBucket: "reactomelcam934.appspot.com",
  messagingSenderId: "565992897365",
  appId: "1:565992897365:web:ac9423b8adb150c9240ddc",
  measurementId: "G-X3MYKG4QRW",
  databaseURL: "https://reactomelcam934-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const GameInfo = () => {
  const [user, , , ] = useContext(Context);
  const { game } = useParams();
  /*
  let juego = jsonDePrueba.results.filter((obj) => {
    return obj.slug === game;
  })[0];
  */
  const [juego, setJuego] = useState(null);
  const [isFavorito, setFavorito] = useState(false);

  const loadGames = async () => {
    const url = `https://api.rawg.io/api/games/${game}?key=5dbb137cfae446feb3caaba262996ed3`
    let data = await fetch(url);
    data = await data.json();
    setJuego(data);
    if(user){
      const dbRed = ref(getDatabase(app));
      get(child(dbRed, `users/${user.uid}/favs/${data.slug}`)).then((snapshot) => {
        if (snapshot.exists())
          setFavorito(true)
      })
    }
  }

  useEffect(() => {
    loadGames();
  },)

  const handleFavoritos = () => {
    if(!user){
      return;
    }
    const db = getDatabase(app);
    if (!isFavorito) {
      set(ref(db, `users/${user.uid}/favs/${juego.slug}`), {
        slug: juego.slug,
        backgroundImage: juego.background_image,
        name: juego.name,
        rating: juego.rating
      })
      setFavorito(true);
    } else {
      remove(ref(db, `users/${user.uid}/favs/${juego.slug}`))
      setFavorito(false);
    }
  }

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
              variant={isFavorito ? "contained" : "outlined"}
              sx={{ color: "primary.white" }}
              onClick={handleFavoritos}
              disabled={!user}
            >
              {user ? "Favoritos" : "Inicia sesión para poder guardar tus favoritos"}
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
