import { Link } from "react-router-dom";
import { ButtonProps } from "../../Models/InterfaceProps";
import "../../Styles/Reusable/Button.css";

export default function Button(props: ButtonProps) {
  return (
    <Link className={`button ${props.buttonType}`} to={props.destination}>
      {props.text}
    </Link>
  );
}
