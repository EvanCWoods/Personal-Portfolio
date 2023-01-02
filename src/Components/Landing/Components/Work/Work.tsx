import WorkPortal from "./Components/WorkPortal";
import "../../../../Styles/Landing/Work.css";
import { Box } from "@mui/material";

export default function Work() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
      <WorkPortal
        title="Web Development"
        content="I am a full stack dev (MERN &amp; ASP.NET) who is driven to bring businesses the power of modern technologies!"
        toUrl="/projects/web-development"
      />
      <WorkPortal
        title="Tech Blog"
        content="See my weekly articles on modern technologies as I discover interesting things about them."
        toUrl="/blog"
      />
    </Box>
  );
}
