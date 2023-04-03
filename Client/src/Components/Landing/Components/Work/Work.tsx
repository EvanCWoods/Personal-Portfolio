import WorkPortal from "./Components/WorkPortal";
import "../../../../Styles/Landing/Work.css";
import { Box } from "@mui/material";

export default function Work() {
  return (
    <Box className="mobile-work" sx={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
      <WorkPortal
        title="Personal Projects"
        content="See The Things I Spend My Spare Time Working On, Across Web Development And Machine Learning!"
        toUrl="/personal-projects"
      />
      <WorkPortal
        title="Professional Experience"
        content="See What I Have Done For Others, Both At A Fortune 500 Company, Insight, And MY Software Agency, Block Software."
        toUrl="/professional-projects"
      />
      <WorkPortal
        title="Tech Blog"
        content="See my weekly articles on modern technologies as I discover interesting things about them."
        toUrl="/blog"
      />
    </Box>
  );
}
