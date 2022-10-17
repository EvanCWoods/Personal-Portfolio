import { Box } from "@mui/material";
import Mountains from "../../../../Assets/mountain-landscape.png";
import "../../../../Styles/Landing/CallToAction.css";
import Work from "../Work/Work";

export default function CallToAction() {
  return (
    <Box>
      <img src={Mountains} alt="landscape"></img>
      <Box>
        <Box>
          <Box>
              <Box>
                  <h1>See My Amazing Projects!</h1>
                  <Box>
                    <button>EXPLORE NOW</button>
                  </Box>
              </Box>
          </Box>
        </Box>
      <Work />
      </Box>
    </Box>
  );
}
