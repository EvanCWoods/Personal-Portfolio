import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Headhsot from "../../../../../Assets/Headshot.PNG";

export default function HeadShot() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      <Box sx={{ marginTop: "30px", width: "150px", aspectRatio: "1/1", display: "flex", alignItems: "center" }}>
        <img src={Headhsot} alt="headshot" style={{ width: "100%", height: "100%", borderRadius: "50%", border: "1px solid var(--yellow-background)" }}></img>
      </Box>
      <Box sx={{ width: "100%", textAlign: "center", marginTop: "30px", color: "var(--white-text)" }}>
        <Typography variant="h4">Evan Woods</Typography>
        <Typography>Full Stack Developer</Typography>
        <Typography>(MERN &amp; ASP .NET)</Typography>
      </Box>
    </Box>
  );
}
