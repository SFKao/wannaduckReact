import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";


import { initializeApp } from "firebase/app";
import {
  getAuth,
  updateProfile,
  updatePassword,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


const UserInfoScreen = () => {
  const [user, setUser] = useContext(Context);
  const navigate = useNavigate();

  const [mensajeError, setMensajeError] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [rPass, setRPass] = useState("");

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  //Si no estas logueado, al home
  useEffect(() => {
    if (!user) navigate("/");
  }, [user]);

  const handleActualizarUsuario = () => {
    setMensajeError("");
    if (pass != rPass) {
      setMensajeError("Las contraseñas no coinciden");
      return;
    }
    if(username != ""){
      updateProfile(auth.currentUser, {
        displayName: username,
      })
        .then(() => {
            let nUser = user;
            nUser.displayName = username;
            setUser(nUser);
            setMensajeError("Actualizado!")
        })
        .catch((error) => {
          setMensajeError(error.message);
        });
    }
    
  };

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
              variant="contained"
              color="primary"
              sx={{ borderRadius: "16px" }}
            >
              Mi usuario
            </Button>
          </NavLink>
          <Button
            variant="outlined"
            color="primary"
            sx={{ borderRadius: "16px" }}
          >
            Mis favoritos
          </Button>
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
        <Stack direction="column">
          <TextField
            margin="normal"
            label="username"
            variant="standard"
            sx={{
              input: { color: "primary.white" },
              "& label": { color: "primary.white" },
            }}
            onChange={(state) => {
              setUsername(state.target.value);
            }}
          />
          <TextField
            id="password"
            type={showPassword ? "text" : "password"}
            label="nueva contraseña"
            variant="standard"
            sx={{
              input: { color: "primary.white" },
              "& label": { color: "primary.white" },
            }}
            margin="normal"
            onChange={(state) => {
              setPass(state.target.value);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{ color: "primary.main" }}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="repeatPassword"
            type={showPassword ? "text" : "password"}
            label="repetir contraseña"
            variant="standard"
            margin="normal"
            onChange={(state) => {
              setRPass(state.target.value);
            }}
            sx={{
              input: { color: "primary.white" },
              "& label": { color: "primary.white" },
            }}
          />
          <Box sx={{ color: "primary.main" }}>
            <p>{mensajeError}</p>
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "16px", marginBottom: "20px" }}
            onClick={handleActualizarUsuario}
          >
            Actualizar usuario
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default UserInfoScreen;
