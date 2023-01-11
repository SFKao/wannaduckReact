import { Grid, Button, Chip, Stack, Box } from '@mui/material'
import React from 'react'
import { ThemeProvider } from '@emotion/react';
import Tema from '../../themes/Tema';

const Footer = () => {
    return ( 
        < ThemeProvider theme = { Tema } >
            <Stack
            direction='row'
            spacing={2}
            padding={3}
            justifyContent='space-between'
            sx = {
                { bgcolor: 'fondo.main' }
            } >
                <Stack direction='column' spacing={1}>
                    <Chip label = "Creado por: Óscar Melero Camacho"
                    color = 'primary' />
                        <Box sx={{color:'#ff8000'}}>
                    <span>Realizado para Diseño de Interfaces</span>
                    </Box>
                    
                </Stack>
                <Stack direciton='column' spacing={1}>
                    <a href='https://gitlab.iesvirgendelcarmen.com/omelcam934/wannaduck'>
                    <Button
                    variant = "contained"
                    color = 'primary' 
                    sx={{borderRadius:'24px'}}
                    >Enlace al gitlab</Button>
                    </a>
                </Stack>
            </Stack > 
        </ThemeProvider>
        )
    }
    
    export default Footer