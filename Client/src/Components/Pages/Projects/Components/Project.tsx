import "../../../../Styles/Projects/Project.css";
import { ProjectProps } from "../../../../Models/ComponentProps";
import { Box, Typography } from "@mui/material";

export default function Project(props: ProjectProps) {
  return (
    <Box className="project">
      <Box className="image-container">
        <img className="project-image" src={props.image} alt="some project" />
      </Box>
      <Typography variant="h1">{props.title}</Typography>
      <Typography variant="body1">
        {props.description}
      </Typography>
      <Box className="external-link-container">
        {props.websiteLink ? <a href={props.websiteLink}>See The Site!</a> : null}
        <a href={props.codeLink}>See The Code!</a>
      </Box>
    </Box>
  );
}
