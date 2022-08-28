import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Rubik"],
  },
  palette: {
    primary: {
      main: "#00FFFF",
    },
  },
  components: {
    MuiButton: {},
  },
});

export default theme;
