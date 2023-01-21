import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import { NavLink } from "react-router-dom";
import { Context } from "../context/Context";
import { FavoriteBorder } from "@mui/icons-material";

import { initializeApp } from "firebase/app";
import {getDatabase,ref,set,get,child,remove} from 'firebase/database';

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

const TarjetaJuego = (props) => {

  const [user, , , ] = useContext(Context);
  const [isFavorito, setFavorito] = useState(props.favorito!==undefined);

  useEffect(()=>{
    if(user&&!props.favorito){
      const dbRed = ref(getDatabase(app));
      get(child(dbRed, `users/${user.uid}/favs/${props.slug}`)).then((snapshot)=>{
        if(snapshot.exists())
          setFavorito(true)
      })
    }
  },)

  const handleFavoritos = () => {
    if(!user){
      return;
    }
    const db = getDatabase(app);
    if(!isFavorito){
      set(ref(db, `users/${user.uid}/favs/${props.slug}`), {
        slug: props.slug,
        backgroundImage: props.backgroundImage,
        name: props.name,
        rating: props.rating
      } )
      setFavorito(true);
    }else{
      remove(ref(db, `users/${user.uid}/favs/${props.slug}`))
      setFavorito(false);
    }
  }

  //slug, backgroundImage, name, rating
  return (
    <Card sx={{ maxWidth: 250 }}>
      <NavLink to={`/game/${props.slug}`} style={{ textDecoration: "none" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image={props.backgroundImage}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "primary.contrastText" }}
            >
              {props.name}
            </Typography>
            <Rating
              name="half-rating-read"
              defaultValue={props.rating}
              precision={0.5}
              readOnly
            />
          </CardContent>
        </CardActionArea>
      </NavLink>
      <CardActions>
        <Button size="small" color="primary" onClick={handleFavoritos} disabled={!user}>
          {isFavorito ? <FavoriteIcon/> : <FavoriteBorder/>}
        </Button>
      </CardActions>
    </Card>
  );
};

export default TarjetaJuego;
