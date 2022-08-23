import {GetAgeAsNumber} from "../../../../../Utils/GetAgeAsNumber";

export default function Location() {
  return (
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
        <p className="location-value">{GetAgeAsNumber()}</p>
      </div>
      <div className="underline"></div>
    </div>
  );
}
