import { Box, Typography } from "@mui/material";
import Mountains from "../../../../Assets/mountain-landscape.png";
import "../../../../Styles/Landing/CallToAction.css";
import Work from "../Work/Work";

export default function CallToAction() {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${Mountains})`,
          backgroundSize: "cover",
        }}
      >
        <Box sx={{ width: "100%", height: "50%", display: "flex", alignItems: "flex-start", flexWrap: "wrap"}}>
          <Typography variant="h4" sx={{ color: "var(--white-text)", width: "100%", mt: "100px", ml: "40px"}}>
            See My Amazing Projects!
          </Typography>
          <Box>
            <button
              style={{
                background: "var(--yellow-background)",
                width: "max-content",
                padding: "5% 5%",
                margin: "40px 0 40px 40px",
                borderRadius: "3px",
                border: "none",
              }}
            >
              EXPLORE NOW
            </button>
          </Box>
        </Box>
      </Box>
      <Box>
        <Work />
      </Box>
    </Box>
  );
}
