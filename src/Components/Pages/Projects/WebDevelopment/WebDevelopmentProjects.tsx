import Project from "../Components/Project";
import "../../../../Styles/Projects/Projects.css";
import Cognizance from "../../../../Assets/ProjectImages/Cognizance.png"
export default function WebDevelopmentProjects() {
  return (
    <div className="web-development projects">
      <Project image={Cognizance} title="Cognizance" description="A project built using the MERN stack and python to run live cryptocurrency price data through an algorithm that outputs buy and sell signals, along with being an API for developers to sign up and begin using the comprehensive data that the service provides." websiteLink="https://evan-woods-final-project.herokuapp.com/" codeLink="https://github.com/EvanCWoods/Money-Printer"/>
    </div>
  );
}
