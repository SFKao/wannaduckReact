import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  Button,
  Grid,
  Stack,
} from "@mui/material";

import { initializeApp } from "firebase/app";
import {getDatabase,ref,get,child} from 'firebase/database';
import TarjetaJuego from "../tartejaJuego/TarjetaJuego";

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

const MisFavoritos = () => {
  const [user, , , ] = useContext(Context);
  const [juegos, setJuegos] = useState([])
  const navigate = useNavigate();


  //Si no estas logueado, al home
  useEffect(() => {
    if (!user) navigate("/");
  }, [user]);

  useEffect(()=>{
    const dbRed = ref(getDatabase(app));
    get(child(dbRed, `users/${user.uid}/favs`)).then((snapshot) => {
        if(snapshot.exists()){
            setJuegos(Object.entries(snapshot.val()).map(([k,v]) => {return v}))
        }
    })
  },[])

  return (
    <Grid container spacing={2}>
      <Grid item xs={5} sm={4} lg={2}>
        <Stack
          direction="column"
          justifyContent="start"
          spacing={1}
          paddingTop={2}
          paddingBottom={2}
          sx={{
            bgcolor: "fondo.main",
            borderRight: "2px solid #ff8000",
            borderRadius: 5,
          }}
        >
          <NavLink style={{ textDecoration: "none" }} to="/user/myuser">
            <Button
              variant="outlined"
              color="primary"
              sx={{ borderRadius: "16px" }}
            >
              Mi usuario
            </Button>
          </NavLink>
          <NavLink style={{textDecoration: "none"}} to="/user/myfavourites">
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "16px" }}
          >
            Mis favoritos
          </Button>
          </NavLink>
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "16px" }}
          >
            Mis juegos jugados
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "16px" }}
          >
            Preferencias
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={7} sm={8} lg={10}>
        {
            ((()=>{
      if(!juegos)
        return <div>CARGANDO</div>
    else
        return <Grid container spacing={1} sx={{ padding: 2, width: "auto" }}>
            {juegos.map(({ backgroundImage, name, rating, slug }) => (
            <Grid item xs={6} sm={4} lg={2} sx={{ padding: 2 }}>
                <TarjetaJuego
                backgroundImage={backgroundImage}
                name={name}
                rating={rating}
                slug={slug}
                favourite={true}
                />
            </Grid>
            ))}
        </Grid>
    })())
}
      </Grid>
    </Grid>
  );
};

export default MisFavoritos;
