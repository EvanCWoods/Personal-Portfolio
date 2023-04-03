import { Box } from "@mui/system";
import React from "react";

const Login = () => {

    const handleClick = async () => {
        const email = (document.querySelector(".inpOne") as HTMLInputElement).value;
        const password = (document.querySelector(".inpTwo") as HTMLInputElement).value;

        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ "Email": email, "Password": password })
        });
        const data = await response.json();
        localStorage.setItem("credentials", data.token);
    }
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box>
                <input className="inpOne"></input>
                <input className="inpTwo"></input>
                <button onClick={handleClick}>Submit</button>
            </Box>
        </Box>
    )
}

export default Login;