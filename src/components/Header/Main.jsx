import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import logo from "/logo.png";

const StyledHeader = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    backgroundColor: theme.palette.header.main,
    padding: "1rem",
    [theme.breakpoints.up("md")]: {
        padding: "1.5rem 2.5rem"
    }
}));

const Logo = styled("img")(({ theme }) => ({
    width: "75px",
    height: "1.5rem",
    [theme.breakpoints.up("md")]: {
        width: "100px",
        height: "2rem"
    }
}));

function Header() {
    return (
        <StyledHeader component="header">
            <Logo src={logo} alt="Logo" />
        </StyledHeader>
    );
}

export default Header;
