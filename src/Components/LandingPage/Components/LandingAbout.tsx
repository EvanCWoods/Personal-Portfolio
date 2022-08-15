import WaveSvg from "../../Reusable/WaveSvg";
import Button from "../../Reusable/Button";
import "../../../Styles/LandingPage/LandingAbout.css";
import "../../../Styles/LandingPage/LandingPage.css";

export default function LandingAbout() {
  // Color variable to set the background for components throughout the component
  const backgroundColor = "#241d3e";
  return (
    <div className="landing-about">
      <div style={{ height: "20vh", background: backgroundColor}}>
        <div className="landing-info">
          <h1 className="red-text">Evan Woods</h1>
          <br />
          <p className="white-text">Full Stack Software Developer</p>
          <br />
          <div style={{width: "5%", border: "1px solid #d0194a"}}></div>
        </div>
        <div className="landing-buttons">
            <Button text="My Projects" destination="/projects" buttonType="primary" />
            <Button text="Contact Me" destination="/contact" buttonType="secondary" />
        </div>
      </div>
      <WaveSvg color={backgroundColor} opacity="1" />
    </div>
  );
}
