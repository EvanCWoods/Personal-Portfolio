import SideBar from "./Components/SideBar/SideBar";
import CallToAction from "./Components/CallToAction/CallToAction";
import { Grid, Box } from "@mui/material";

export default function Landing() {
  return (
    <Box sx={{ height: "100vh" }}>
      <Grid container>
        <Grid item xs={12} md={3} lg={2}>
          <SideBar />
        </Grid>
        <Grid item xs={12} md={9} lg={10}>
          <CallToAction />
        </Grid>
      </Grid>
    </Box>
  );
}
