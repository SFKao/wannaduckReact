import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {Route, Routes} from 'react-router-dom';
import Error from './components/error/Error';
import ListaTodo from './components/listaTodo/ListaTodo';
import { Box, ThemeProvider } from '@mui/material';
import Tema from './themes/Tema';
import GameInfo from './components/gameInfo/GameInfo';
import Registrarse from './components/registrarse/Registrarse';
import Login from './components/login/Login';
import {Context} from './components/context/Context'
import { useState } from 'react';
import UserInfoScreen from './components/userInfoScreen/UserInfoScreen';
import BuscarJuego from './components/buscarJuego/BuscarJuego'
import ListaGenero from './components/listaGenero/ListaGenero';

function App() {

  const [user, setUser] = useState(null);
  const [localDisplayName, setLocalDisplayName] = useState("ERROR");
  const [triedLogin, setTriedLogin] = useState(false);
  
  if(!triedLogin){
    let localUser = JSON.parse(localStorage.getItem("user"));
    if(localUser){
      setUser(localUser);
      setLocalDisplayName(localUser.displayName);
    }
    setTriedLogin(true);
  }

  

  return (
    <Context.Provider value={[
      user, setUser,
      localDisplayName, setLocalDisplayName
    ]}>
    <ThemeProvider theme={Tema}>
  <Box sx={{backgroundColor:'fondo.main'}}>
    <Header/>
  <Routes>
    <Route exact path='/' element={<ListaTodo/>}/>
    <Route exact path='/game/:game' element={<GameInfo/>}/>
    <Route exact path='/search/:game' element={<BuscarJuego/>}/>
    <Route excat path='/register' element={<Registrarse/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route excat path='/user/myuser' element={<UserInfoScreen/>}/>
    <Route exact path='/genres/:genre' element={<ListaGenero/>}/>
    <Route path='*' element={<Error/>}/>
  </Routes>
  <Footer/>
</Box>
</ThemeProvider>
</Context.Provider>
  );
}

export default App;
