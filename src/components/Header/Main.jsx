import { Button, styled } from "@mui/material";

import Box from "@mui/material/Box";
import logo from "~/assets/logo.png";

const StyledHeader = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    backgroundColor: theme.palette.header.main,
    padding: "1rem",
    [theme.breakpoints.up("md")]: {
        padding: "1.5rem 2.5rem",
    },
}));

function Header() {
    return (
        <StyledHeader component="header">
            <img src={logo} width="100" height="32" alt="Logo" />
        </StyledHeader>
    );
}

export default Header;
