import * as React from "react";
import Box from "@mui/material/Box";
import logo from "~/assets/logo.png";

function Header() {
    return (
        <Box component="header" sx={{ display:'flex', alignItems:'center', justifyContent: 'left', py: 3, px:7, backgroundColor:"#fff" }}>
            <img src={logo} width="100" height="32" />
        </Box>
    );
}

export default Header;