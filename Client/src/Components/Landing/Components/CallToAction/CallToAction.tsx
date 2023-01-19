import { Box, Grid, Typography } from "@mui/material";
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
              <Grid container>
                <Grid item xs={12} md={6} sx={{ p: "5%" }}>
                  <Typography variant="h4" sx={{ color: "var(--white-text)" }}>Whether It's Cloud, Coding, Consulting or Coaching, I Can Help!</Typography>
                  <button style={{ padding: "2% 4%", border: "none", background: "var(--yellow-background)", borderRadius: "10px", marginTop: "100px", fontSize: "1rem" }} onClick={handleOpenModal}>INQUIRE</button>
                </Grid>
                <Grid item xs={12} md={6} sx={{ p: "5%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Box className="white-glassmorphism" sx={{ width: "300px", height: "300px", p: 2, color: "var(--white-text)" }}>
                    <Typography variant="h5" sx={{ color: "var(--yellow-background)", pb: 1.5 }}>Mission Statement</Typography>
                    <Typography variant="body1">Empower businesses and professionals with the cutting edge of technology to make the most of opportunity.</Typography>
                    <Typography variant="body1" sx={{ pt: 1 }}>I get great satisfaction from seeing a smile on the faces of those I help. Let's make yours next.</Typography>
                  </Box>
                </Grid>
              </Grid>
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
