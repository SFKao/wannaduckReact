import {
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import Duck from "../../assets/duck.png";
import { Context } from "../context/Context";
import Google from "../../assets/google.png";
import HeaderButton from "../headerButton/HeaderButton";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
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
const provider = new GoogleAuthProvider();

const Registrarse = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  let navigate = useNavigate();

  const [, setUser, , setLocalDisplayName] = useContext(Context);

  const [mensajeError, setMensajeError] = useState("");
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorRepeatPassword, setErrorRepeatPassword] = useState(false);
  const [recuerdame, setRecuerdame] = useState(true);

  const tryRegister = (email, password, username) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        
        updateProfile(auth.currentUser, {
          displayName: username,
        })
          .then(() => {
            setUser(userCredential.user);
            setLocalDisplayName(userCredential.user.displayName)
            if (recuerdame)
              localStorage.setItem("user", JSON.stringify(userCredential.user));
            else localStorage.removeItem("user");
            navigate("/");
            // Profile updated!
            // ...
          })
          .catch((error) => {
            setMensajeError(error.message);
          });
      })
      .catch((error) => {
        setMensajeError(error.message);
        // ..
      });
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [rPassword, setRPass] = useState("");

  const handleSummit = () => {
    setErrorUsername(false);
    setErrorEmail(false);
    setErrorPassword(false);
    setErrorRepeatPassword(false);

    let emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (username === "") {
      setErrorUsername(true);
      setMensajeError("El nombre de usuario es requerido");
      return;
    }
    if (email === "") {
      setErrorEmail(true);
      setMensajeError("El email es requerido");
      return;
    }
    if (!email.match(emailRegex)) {
      setErrorEmail(true);
      setMensajeError("El email no es valido");
      return;
    }
    if (password === "") {
      setErrorPassword(true);
      setMensajeError("La contraseña es requerida");
      return;
    }
    if (password.length < 6) {
      setErrorPassword(true);
      setMensajeError("La contraseña debe de tener al menos 6 caracteres");
      return;
    }
    if (rPassword !== password) {
      setErrorRepeatPassword(true);
      setMensajeError("Las contraseñas no coinciden");
      return;
    }
    tryRegister(email, password, username);
  };

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        setLocalDisplayName(result.user.displayName)
        if (recuerdame)
          localStorage.setItem("user", JSON.stringify(result.user));
        else localStorage.removeItem("user");
        navigate("/");
      })
      .catch((error) => {
        setMensajeError(error.message);
        // ..
      });
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") handleSummit();
  };

  return (
    <Box justifyContent="center" sx={{ display: "flex" }}>
      <Stack width={350} justifySelf="center">
        <Box sx={{ color: "primary.main" }}>
          <p>{mensajeError}</p>
        </Box>
        <TextField
          id="username"
          margin="normal"
          label="username*"
          variant="standard"
          sx={{
            input: { color: "primary.white" },
            "& label": { color: "primary.white" },
          }}
          onChange={(state) => {
            setUsername(state.target.value);
          }}
          error={errorUsername}
          onKeyDown={handleEnter}
        />
        <TextField
          id="email"
          margin="normal"
          label="email*"
          variant="standard"
          sx={{
            input: { color: "primary.white" },
            "& label": { color: "primary.white" },
          }}
          onChange={(state) => {
            setEmail(state.target.value);
          }}
          error={errorEmail}
          onKeyDown={handleEnter}
        />
        <TextField
          id="password"
          type={showPassword ? "text" : "password"}
          label="password*"
          variant="standard"
          sx={{
            input: { color: "primary.white" },
            "& label": { color: "primary.white" },
          }}
          margin="normal"
          onChange={(state) => {
            setPass(state.target.value);
          }}
          error={errorPassword}
          onKeyDown={handleEnter}
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
          label="repeat password*"
          variant="standard"
          margin="normal"
          onChange={(state) => {
            setRPass(state.target.value);
          }}
          error={errorRepeatPassword}
          onKeyDown={handleEnter}
          sx={{
            input: { color: "primary.white" },
            "& label": { color: "primary.white" },
          }}
        />
        <FormControlLabel
          sx={{ color: "primary.main", padding: 2 }}
          control={<Checkbox checked={recuerdame} />}
          label="Recuerdame"
          onChange={(event) => setRecuerdame(event.target.checked)}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: "16px", marginBottom: "20px" }}
          onClick={handleSummit}
        >
          Registrarse
        </Button>
        <HeaderButton
          url={Google}
          title="Registrarse con google"
          width="100px"
          sx={{ color: "primary.white", padding: 2 }}
          onClick={handleGoogle}
        />

        <Typography
          gutterBottom
          variant="h2"
          component="div"
          sx={{ color: "primary.main" }}
          justifyContent="center"
          marginTop={2}
        >
          Wannaduck
        </Typography>
        <img width={300} height={300} src={Duck} alt="Logo" />
      </Stack>
    </Box>
  );
};

export default Registrarse;
