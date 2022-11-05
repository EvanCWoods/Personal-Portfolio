import { Box, Typography } from "@mui/material";
import Mountains from "../../../../Assets/mountain-landscape.png";
import "../../../../Styles/Landing/CallToAction.css";
import Work from "../Work/Work";

export default function CallToAction() {
  return (
    <Box sx={{ width: "100%", height: "60%" }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${Mountains})`,
          backgroundSize: "cover",
        }}
      >
        <Box
          className="blue-background"
          sx={{
            width: "70%",
            height: "90%",
            position: "relative",
            top: "10%",
            mx: "15%"
          }}>

          <Box
            sx={{
              width: "130%",
              height: "100%",
              backgroundImage: `url(${Mountains})`,
              backgroundSize: "cover",
              position: "relative",
              top: "10%",
              left: "-15%"
            }}>
            <Box
              className="blue-background"
              sx={{
                width: "100%",
                height: "100%",
                opacity: "0.7"
              }}>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="blue-background" sx={{ paddingTop: "10%" }}>
        <Work />
      </Box>
    </Box>
  );
}
