import { Grid } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import React from "react";

const Header = ({ children }: any) => {

    const handleClick = () => {
        document.location.replace("/");
    }

    return (
        <Grid container sx={{ color: "var(--white-text)" }}>
            <Grid item xs={1} sx={{ display: "flex", justifyContent: "center", py: 1 }}>
                <HomeIcon sx={{ fontSize: "2.5rem" }} onClick={handleClick} className="hover" />
            </Grid>
            {children
                ?
                <Grid item xs={11}>
                    {children}
                </Grid>
                : null
            }
        </Grid>
    )
}

export default Header;