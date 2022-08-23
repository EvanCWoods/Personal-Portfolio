import HeadshotImage from "../../../../../Assets/IMG_7487 2.jpg";


export default function HeadShot() {
    return (
        <div className="headshot">
        <div className="headshot-rounded">
          <img src={HeadshotImage} alt="headshot"></img>
        </div>
        <div className="headshot-text">
          <h2 className="sidebar-title">Evan Woods</h2>
          <p className="sidebar-text">Full Stack Developer</p>
          <p className="sidebar-text">(MERN &amp; ASP .NET)</p>
        </div>
      </div>
    )
}