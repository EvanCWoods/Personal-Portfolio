import { Box } from "@mui/system";
import "../../../../Styles/Landing/Landing.css";
import Headshot from "./Components/Headshot";
import Location from "./Components/Location";
import Technologies from "./Components/Technologies";

export default function SideBar() {
  return (
    <Box sx={{ height: "100%" }}>
      <Headshot />
      <Location />
      <Technologies />
    </Box>
  );
}
