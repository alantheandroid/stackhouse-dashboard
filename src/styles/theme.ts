import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'initial',
        },
      },
    },
  },
});

export default theme;
