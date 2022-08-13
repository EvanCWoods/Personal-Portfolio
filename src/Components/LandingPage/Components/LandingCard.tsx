import "../../../Styles/LandingPage/LandingCard.css";
export default function LandingCard() {
  return (
    <div className="landing-card white-background blue-text">
      <h2 style={{ fontWeight: 400 }}>Mission Statement</h2>
      <br />
      <p>
        My aim is to bring the endless benefits of <span className="red-text">modern technology</span> to as many
        people as I can, from <span className="red-text">revolutionizing businesses</span>, to <span className="red-text">teaching new tech talent!</span>
      </p>
      <br />
      <h4 >Key Skills</h4>
      <ul style={{marginLeft: "5%"}}>
          <li>React</li>
          <li>Typescript</li>
          <li>Node</li>
          <li>Python</li>
          <li>C# / .NET</li>
          <li>Microsoft Azure</li>
      </ul>
    </div>
  );
}
