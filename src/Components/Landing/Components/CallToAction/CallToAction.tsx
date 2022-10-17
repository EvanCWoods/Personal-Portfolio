import { Box } from "@mui/material";
import Mountains from "../../../../Assets/mountain-landscape.png";
import "../../../../Styles/Landing/CallToAction.css";
import Work from "../Work/Work";

export default function CallToAction() {
  return (
    <Box sx={{width: "100%", height: "100%"}}>
      <Box sx={{width: "100%", height: "100%", backgroundImage: `url(${Mountains})`, backgroundSize: "cover"}}>
      </Box>
      {/* <Box>
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
      </Box> */}
    </Box>
  );
}
