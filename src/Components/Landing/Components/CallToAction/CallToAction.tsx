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
        <Box>
          <Typography variant="h4">See My Amazing Projects!</Typography>
          <Box>
            <button
              style={{
                background: "var(--yellow-background)",
                padding: "0.7% 1%",
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
