import LandingAbout from "./Components/LandingAbout";
import LandingCard from "./Components/LandingCard";
import "../../Styles/LandingPage/LandingPage.css";

export function LandingPage() {
  return (
    <div className="landing-page">
      <LandingAbout />
      <LandingCard />
    </div>
  );
}
