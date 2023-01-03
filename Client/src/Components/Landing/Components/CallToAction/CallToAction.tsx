import { Box, Typography } from "@mui/material";
import Mountains from "../../../../Assets/mountain-landscape.png";
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
            height: "50%",
            position: "fixed",
            top: 0
          }}></Box>
        <Box
          className="blue-background"
          sx={{
            width: "80%",
            height: "90%",
            position: "relative",
            top: "10%",
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
              }}>
              <Box sx={{ p: "5%" }}>
                <Typography variant="h4" sx={{ color: "var(--white-text)" }}>Inquire To See What I Can Do For You</Typography>
                <button style={{ padding: "1% 2%", border: "none", background: "var(--yellow-background)", borderRadius: "10px", marginTop: "100px" }} onClick={handleOpenModal}>ENQUIRE</button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="blue-background" sx={{ paddingTop: "10%" }}>
        <Work />
      </Box>
      <ContactModal open={open} setOpen={setOpen} />
    </Box>
  );
}
