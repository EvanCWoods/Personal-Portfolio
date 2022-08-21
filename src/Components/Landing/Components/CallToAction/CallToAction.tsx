import Mountains from "../../../../Assets/mountain-landscape.png";
import "../../../../Styles/Landing/CallToAction.css";

export default function CallToAction() {
  return (
    <div className="call-to-action">
      <img src={Mountains} alt="landscape" className="base-background"></img>
      <div className="solid-cta-background">
        <div className="cta-background">
          <div className="cta-filter">
          </div>
        </div>
      </div>
    </div>
  );
}
