import { createTheme } from "@mui/material/styles";

export const svg = (svgNameFile) => `src/assets/icons/${svgNameFile}`;

let theme = createTheme({
    palette: {
        primary: {
            main: "#1B31A8",
            text: "rgba(30, 42, 50, 1)",
            subtitle: "rgba(112, 135, 151, 1)",
            lightBlue: "rgba(0, 121, 255, 1)",
            white: "rgba(255, 255, 255, 1)",
            disable: "rgba(27, 49, 168, 0.14)"
        },
        header: {
            main: "rgba(255, 255, 255, 1)",
        },
        border:{
            main:"rgba(233, 238, 242, 1)"
        }
    },
    typography: {
        fontFamily: ["Work Sans", "sans-serif"].join(","),
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1440,
        },
    },
});

// responsive
theme = createTheme(theme, {
    typography: {
        headingMedium: {
            fontFamily: "Rubik",
            fontSize: "1.5rem",
            fontWeight: "500",
            lineHeight: "1.75rem",
            [theme.breakpoints.up("md")]: {
                fontSize: "2rem",
                lineHeight: "2.375rem",
            },
        },
        h4: {
            fontFamily: "Rubik",
            fontSize: "1.25rem",
            fontWeight: "500",
            lineHeight: "1.5rem",
            [theme.breakpoints.up("md")]: {
                fontSize: "1.5rem",
                lineHeight: "1.75rem",
            },
        },
        h6: {
            fontSize: "1.125rem",
            fontWeight: "400",
            lineHeight: "1.25rem",
            [theme.breakpoints.up("md")]: {
                fontSize: "1.25rem",
                lineHeight: "1.5rem",
            },
        },
        body1: {
            fontSize: "0.875rem",
            fontWeight: "400",
            lineHeight: "1.25rem",
            [theme.breakpoints.up("md")]: {
                fontSize: "1rem",
                lineHeight: "1.5rem",
            },
        },
        body2: {
            fontSize: "0.875rem",
            fontWeight: "400",
            lineHeight: "1.25rem",
            transform: "none",
            position: "relative",
            marginBottom: "0.25rem",
        },
    },
});

export default theme;
