import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface WorkPortalProps {
  title: string;
  content: string;
  toUrl: string;
}

export default function WorkPortal(props: WorkPortalProps) {
  return (
    <div className="work-portal">
      <h3 className="work-title">{props.title}</h3>
      <p className="work-text">{props.content}</p>
      <div className="learn-more">
        <Link className="link-tag" to={props.toUrl}>
          Learn More
        </Link>
        <KeyboardArrowRightIcon />
      </div>
    </div>
  );
}
