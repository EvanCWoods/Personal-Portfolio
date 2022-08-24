import WorkPortal from "./Components/WorkPortal";
import "../../../../Styles/Landing/Work.css";

export default function Work() {
  return (
    <div className="work">
      <WorkPortal
        title="Web Development"
        content="I am a full stack dev (MERN &amp; ASP.NET) who is driven to bring businesses the power of modern technologies!"
        toUrl="/projects/web-development"
      />
      <WorkPortal
        title="Machine Learning"
        content="I fell in love with programming by learning Machine Learning, so it holds a special place in my heart. Take a look at my work!"
        toUrl="/projects/machine-learning"
      />
      <WorkPortal
        title="Web 3"
        content="I'm a person who thinks that cryptography is a cool concept, and with all of the recent success of the crypto space, I learned how to build on the Ethereum network!"
        toUrl="/projects/web-3"
      />
    </div>
  );
}
