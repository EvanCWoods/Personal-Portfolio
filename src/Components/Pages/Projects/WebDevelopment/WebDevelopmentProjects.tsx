import Project from "../Components/Project";
import "../../../../Styles/Projects/Projects.css";
import Cognizance from "../../../../Assets/ProjectImages/Cognizance.png"
import ArtJacent from "../../../../Assets/ProjectImages/ArtJacent.png"
import JATE from "../../../../Assets/ProjectImages/JATE.png"
export default function WebDevelopmentProjects() {
  return (
    <div className="web-development projects">
        <div className="section-header">
            <h1>My <span className="underline-title">Web Development Work</span></h1>
        </div>
      <div className="project-cards">
      <Project image={Cognizance} title="Cognizance" description="A project built using the MERN stack and python to run live cryptocurrency price data through an algorithm that outputs buy and sell signals, along with being an API for developers to sign up and begin using the comprehensive data that the service provides." websiteLink="https://evan-woods-final-project.herokuapp.com/" codeLink="https://github.com/EvanCWoods/Money-Printer"/>
      <Project image={ArtJacent} title="ArtJacent" description="A project built during my time in the Sydney Uni Coding Bootcamp, built with 3 other students, This project is a social media site that allows users to find local artist's work, and artists to share their work, The user's feed is ranked by their disatance to the artist's location" websiteLink="https://artjacent.herokuapp.com/" codeLink="https://github.com/EvanCWoods/artJacent"/>
      <Project image={JATE} title="JATE" description="A project built during my time in the Sydney Uni Coding Bootcamp, built using PWA technologies, this is an in browser text editor that allows users to continue their work even while offline. this project leverages the browsers in uilt database to store the users work." websiteLink="https://text-editor-hw-19.herokuapp.com/" codeLink="https://github.com/EvanCWoods/Text-Editor" />
      </div>
    </div>
  );
}
