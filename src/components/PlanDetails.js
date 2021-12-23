import musicLogo from "../images/icon-music.svg";

function PlanDetails() {
  return (
    <div className="details-container">
      <div className="inner-details">
        <img src={musicLogo} alt="music notes" className="music-notes" />
        <div className="plan-details">
          <p className="plan-name">Annual Plan</p>
          <p className="price">$59.99/year</p>
        </div>
      </div>
      <a href="#">Change</a>
    </div>
  );
}

export default PlanDetails;
