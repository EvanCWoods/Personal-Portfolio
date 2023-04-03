import Project from "../Components/Project";
import TfNSW from "../../../../Assets/ProjectImages/transport.png";
import SydneyWater from "../../../../Assets/ProjectImages/swc.png";
import tl from "../../../../Assets/ProjectImages/tl.png";


export default function ProfessionalProjects() {
  return (
    <div className="Web-three projects">
      <div className="section-header">
        <h1>
          My <span className="underline-title">Professional Experience</span>
        </h1>
      </div>
      <div className="project-cards">
        <Project
          image={TfNSW}
          title="TfNSW - Large File Management"
          description="While working at Insight, my first project as a graduate consultant was to build a large file management system for multiple businesses within TfNSW. This was a full stack application (React, MUI, Cosmos DB / Blob Storage, Azure Functions, C# .NET). I completed the project with one other developer over the course of 3 months, and maintaned HyperCare of the project for a further 5 months."
          websiteLink=""
          codeLink=""
        />
        <Project
          image={SydneyWater}
          title="Sydney Water - IoT Sewer Monitoring"
          description="My second project at Insight was for Sydney Water, building the third phase of their Sewer Monitoring project. As one of 3 developers I was largely responsible for Azure Integration which led to me building Logic App solutions that was linked to IoT Hub and Sydney Water's internal web app, along with Power App portals for in the field use."
          websiteLink=""
          codeLink=""
        />
        <Project
          image={tl}
          title="ThunderLabs - Automation"
          description="After resigning from Insight, my first project as a contactor was joining ThunderLabs to increase internal efficiencies. ThunderLabs is a people focused organization where contacts are everything. My task was to build a web based app that synchronizes all contacts between Microsoft, Google, Apple and HubSpot. This  was a Pro Code build that used Azure, Node, React, TypScript and MUI."
          websiteLink=""
          codeLink=""
        />
      </div>
    </div>
  );
}
