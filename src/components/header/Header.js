import React, { useContext} from "react";
import { Context } from "../context/Context";
import HeaderButton from "../headerButton/HeaderButton";
import { NavLink } from "react-router-dom";
import {
  Button,
  Input,
  InputAdornment,
  Stack,
  ThemeProvider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Tema from "../../themes/Tema";
import duck from "../../assets/duck.png";

const Header = () => {
  const [user, setUser, localDisplayName,] = useContext(Context);

  const handleCerrarSesion = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <ThemeProvider theme={Tema}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="start"
        spacing={1}
        height={100}
        sx={{ bgcolor: "fondo.main", borderBottom: "2px solid #ff8000" }}
      >
        <NavLink style={{ textDecoration: "none" }} to="/">
          <HeaderButton url={duck} title="" width="100px" />
        </NavLink>
        <Input
          placeholder="Buscar"
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon color="primary" />
            </InputAdornment>
          }
          label="Buscar"
          style={{ width: "75%" }}
          sx={{ color: "primary.main" }}
        ></Input>
        {(() => {
          if (user == null) {
            return (
              <>
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{ borderRadius: "16px" }}
                  >
                    Login
                  </Button>
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to="/register">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ borderRadius: "16px" }}
                  >
                    Registrarse
                  </Button>
                </NavLink>
              </>
            );
          } else {
            return (
              <>
                <NavLink style={{ textDecoration: "none" }} to="/user/myuser">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ borderRadius: "16px" }}
                  >
                    {
                      localDisplayName
                    }
                  </Button>
                </NavLink>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ borderRadius: "16px" }}
                  onClick={handleCerrarSesion}
                >
                  Cerrar sesion
                </Button>
              </>
            );
          }
        })()}
      </Stack>
    </ThemeProvider>
  );
};

export default Header;
