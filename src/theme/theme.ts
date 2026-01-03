import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0B3D91',
      contrastText: '#F8FAFC',
    },
    secondary: {
      main: '#0FA3B1',
      contrastText: '#0B1F41',
    },
    background: {
      default: '#F5F7FB',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0F172A',
      secondary: '#334155',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.75rem',
      lineHeight: 1.1,
    },
    h2: {
      fontSize: '2rem',
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '1.35rem',
      lineHeight: 1.3,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.95rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:focus-visible': {
            outline: `3px solid ${theme.palette.secondary.main}`,
            outlineOffset: 2,
          },
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          letterSpacing: 0.2,
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontWeight: 600,
          textUnderlineOffset: '6px',
          textDecorationThickness: '2px',
          '&:focus-visible': {
            outline: `3px solid ${theme.palette.secondary.main}`,
            outlineOffset: 2,
          },
        }),
      },
    },
  },
});

export default theme;
