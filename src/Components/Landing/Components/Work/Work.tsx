import WorkPortal from "./Components/WorkPortal";
import "../../../../Styles/Landing/Work.css";

export default function Work() {
  return (
    <div>
      <WorkPortal
        title="Web Development"
        content="I am a full stack dev (MERN &amp; ASP.NET) who is driven to bring businesses the power of modern technologies!"
        toUrl="/projects/web-development"
      />
    </div>
  );
}
