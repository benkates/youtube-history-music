import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#55add6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    bgColor: "#182133",
    accentColor: "#55add6",
  },
});

export default theme;
