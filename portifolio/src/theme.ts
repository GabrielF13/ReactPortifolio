import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
      primary: {
        main: '#0a0e27',      // Azul escuro profundo
        light: '#1a1f3a',     // Azul médio
        dark: '#050711',      // Azul muito escuro
      },
      secondary: {
        main: '#00d4ff',      // Ciano vibrante
        light: '#33ddff',     // Ciano claro
        dark: '#00a8cc',      // Ciano escuro
      },
      background: {
        default: '#0a0e27',   // Background azul escuro
        paper: '#1a1f3a',     // Background alternativo
      },
    },
    typography: {
      fontFamily: "Segoe",
    },
  });

  theme = responsiveFontSizes(theme);
  
  export default theme;