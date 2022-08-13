export default function WaveSvg(props: { color: string; opacity: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={props.color}
          fill-opacity={props.opacity}
          d="M0,288L34.3,288C68.6,288,137,288,206,282.7C274.3,277,343,267,411,245.3C480,224,549,192,617,154.7C685.7,117,754,75,823,96C891.4,117,960,203,1029,208C1097.1,213,1166,139,1234,96C1302.9,53,1371,43,1406,37.3L1440,32L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
    </svg>
  );
}
