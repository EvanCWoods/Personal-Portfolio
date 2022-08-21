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
      <div className="location">
        <div className="country">
          <p className="location-key">Country:</p>
          <p className="location-value">Australia</p>
        </div>
        <div className="city">
          <p className="location-key">City:</p>
          <p className="location-value">Sydney</p>
        </div>
        <div className="age">
          <p className="location-key">Age:</p>
          <p className="location-value">21</p>
        </div>
        <div className="underline"></div>
      </div>
    </div>
  );
}
