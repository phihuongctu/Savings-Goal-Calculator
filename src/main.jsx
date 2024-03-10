import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "~/configs/ThemeConfig";
import Container from "@mui/material/Container";

import Header from "~/components/Header/Main";
import SavingGoal from "~/pages/SavingGoal";
import "~/assets/styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Container maxWidth={"xl"} sx={{padding:0}}>
                <Header />
                <SavingGoal />
            </Container>
        </ThemeProvider>
    </React.StrictMode>
);
