import React, {useContext, useEffect} from 'react'
import { Context } from '../context/Context';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Button, Grid, Stack } from '@mui/material';
import {Typography} from '@mui/material';

const UserInfoScreen = () => {
 
  const [user, setUser] = useContext(Context);
  const navigate = useNavigate();

  //Si no estas logueado, al home
  useEffect(()=>{
    if(!user)
      navigate("/");
  },[user]);

  return (
    <Grid container spacing={2}>
        <Grid item xs={2}>
          <Stack direction="column" alignItems="center" justifyContent="start" spacing={1} paddingTop={2} paddingBottom={2} sx={{bgcolor:'fondo.main', borderRight:'2px solid #ff8000', borderRadius:5}}>
            <Button variant='outlined' color='primary' sx={{borderRadius:'16px'}} >Mi usuario</Button>
            <Button variant='outlined' color='primary' sx={{borderRadius:'16px'}} >Mis favoritos</Button>
            <Button variant='outlined' color='primary' sx={{borderRadius:'16px'}} >Mis juegos jugados</Button>
            <Button variant='outlined' color='primary' sx={{borderRadius:'16px'}} >Preferencias</Button>
          </Stack>
        </Grid>
        <Grid item xs={10}>
          <p>B</p>
        </Grid>
      </Grid>
  )
}

export default UserInfoScreen