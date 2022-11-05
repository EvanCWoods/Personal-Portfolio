import { Box } from "@mui/system";
import "../../../../Styles/Landing/Landing.css";
import Headshot from "./Components/Headshot";
import Location from "./Components/Location";
import Technologies from "./Components/Technologies";

export default function SideBar() {
  return (
    // <div className="side-bar">
    //   <Headshot />
    //   <Location />
    //   <Technologies />
    // </div>
    <Box sx={{ height: "100%" }}>
      <Headshot />
      <Location />
      <Technologies />
    </Box>
  );
}
