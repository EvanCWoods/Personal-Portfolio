import Headshot from "../../../Assets/IMG_7487 2.jpg";
import "../../../Styles/Landing/Landing.css";

export default function SideBar() {
  return (
    <div className="side-bar">
      <div className="headshot">
        <div className="headshot-rounded">
          <img src={Headshot} alt="headshot"></img>
        </div>
        <div className="headshot-text">
          <h2 className="sidebar-title">Evan Woods</h2>
          <p className="sidebar-text">Full Stack Developer</p>
          <p className="sidebar-text">(MERN &amp; ASP .NET)</p>
        </div>
      </div>
    </div>
  );
}
