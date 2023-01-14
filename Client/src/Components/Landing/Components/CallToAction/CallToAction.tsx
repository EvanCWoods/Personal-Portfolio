import { Box, Typography } from "@mui/material";
import Mountains from "../../../../Assets/mountain-landscape.png";
// import MyImage from "../../../../Assets/MyImage.PNG";
import "../../../../Styles/Landing/CallToAction.css";
import Work from "../Work/Work";
import ContactModal from "../Modals/ContactModal";
import { useState } from "react";

export default function CallToAction() {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpen(true);
  }

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
        <Box className="blue-background-fade"
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
            top: 0
          }}></Box>
        <Box
          className="blue-background"
          sx={{
            width: "80%",
            height: "90%",
            position: "relative",
            top: "-90%",
            mx: "10%"
          }}>

          <Box
            sx={{
              width: "120%",
              height: "110%",
              backgroundImage: `url(${Mountains})`,
              backgroundSize: "cover",
              position: "relative",
              top: "7%",
              left: "-10%"
            }}>
            <Box
              className="blue-background-fade-light"
              sx={{
                width: "100%",
                height: "100%",
                display: "flex"
              }}>
              <Box sx={{ p: "5%", width: "50%" }}>
                <Typography variant="h4" sx={{ color: "var(--white-text)" }}>Whether It's Cloud, Coding, <br></br>or Technical Consulting, <br></br> I Can Help!</Typography>
                <button style={{ padding: "2% 4%", border: "none", background: "var(--yellow-background)", borderRadius: "10px", marginTop: "100px", fontSize: "1rem" }} onClick={handleOpenModal}>INQUIRE</button>
              </Box>
              {/* <Box sx={{ width: "50%" }}>
                <img src={MyImage} alt="headshot" style={{ width: "50%", transform: "scaleX(-1)" }} />
              </Box> */}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="blue-background" sx={{ py: "5%" }}>
        <Work />
      </Box>
      <ContactModal open={open} setOpen={setOpen} />
    </Box>
  );
}
