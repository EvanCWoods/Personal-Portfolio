import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Paper, Typography } from "@mui/material";

interface WorkPortalProps {
  title: string;
  content: string;
  toUrl: string;
}

export default function WorkPortal(props: WorkPortalProps) {
  return (
    <Paper elevation={1} sx={{ width: "350px", height: "200px", p: "1%", mt: "5%", background: "var(--grey-background)", color: "var(--white-text)", borderRadius: "10px" }}>
      <Typography variant="h5" sx={{ textAlign: "center", mb: "3%" }}>{props.title}</Typography>
      <Typography sx={{ textAlign: "center", mb: "3%" }}>{props.content}</Typography>
      <Box>
        <Link className="link-tag" to={props.toUrl}
          style={{ margin: "0 0 5% 5%", display: "flex", alignItems: "center" }}>
          Learn More
          <KeyboardArrowRightIcon />
        </Link>
      </Box>
    </Paper>
  );
}
