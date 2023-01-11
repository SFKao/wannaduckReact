import { createTheme } from '@mui/material/styles';

const Tema = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#ff8000',
      darker: '#ff8000',
      contrastText: '#000000'
    },
    fondo: {
      main: '#333333',
      contrastText: '#ff8000',
    },
  },
});

export default Tema;