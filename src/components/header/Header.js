import React from 'react'

import HeaderButton from '../headerButton/HeaderButton'
import { NavLink } from 'react-router-dom'
import { Autocomplete, Button, Input, InputAdornment, Stack, ThemeProvider } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Tema from '../../themes/Tema';
import duck from '../../assets/duck.png'

const Header = () => {
  return (
    <ThemeProvider theme={Tema}>
    <Stack direction="row" alignItems="center" justifyContent="start" spacing={1} height={100} sx={{bgcolor:'fondo.main'}}>
    <NavLink to="/">
    <HeaderButton
    url={duck}
    title=""
    width="100px"
    />
    </NavLink>
    <Input placeholder="Buscar" endAdornment={
        <InputAdornment position="end">
            <SearchIcon color='primary'/>
        </InputAdornment>} label="Buscar" style={{width:'75%'}} sx={{color:'primary.main'}}>
    </Input>
    <NavLink to="/login">
        <Button variant='outlined' color='primary' sx={{borderRadius:'16px'}}>Login</Button>
    </NavLink>
    <NavLink to="/register">
        <Button variant='contained' color='primary' sx={{borderRadius:'16px'}}>Register</Button>
    </NavLink>
    </Stack>
    </ThemeProvider>
  )
}

export default Header