import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#1B31A8"
        },
        secondary: {
            main: "#0079FF"
        },
    },
    typography: {
        fontFamily: ["Work Sans", "sans-serif"].join(",")
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1440
        }
    }
});

export const icon = (imgNameFile) => `~/assets/icons/${imgNameFile}`;
