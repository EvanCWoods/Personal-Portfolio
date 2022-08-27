import "../../../../Styles/Projects/Project.css";
import { ProjectProps } from "../../../../Models/ComponentProps";

export default function Project(props: ProjectProps) {
  return (
    <div className="project">
      <div className="image-container">
        <img className="project-image" src={props.image} alt="some project" />
      </div>
      <h1>{props.title}</h1>
      <p>
        {props.description}
      </p>
      <div className="external-link-container">
        {props.websiteLink ? <a href={props.websiteLink}>See The Site!</a> : null}
        <a href={props.codeLink}>See The Code!</a>
      </div>
    </div>
  );
}
