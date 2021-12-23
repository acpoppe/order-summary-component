import styles from "../styles/OrderSummaryCard.css";
import PlanDetails from "./PlanDetails";
import heroImg from "../images/illustration-hero.svg";

function OrderSummaryCard() {
  return (
    <div className="card-container" style={styles}>
      <img src={heroImg} alt="Girl dancing to music" />
      <div className="contents-container">
        <h2>Order Summary</h2>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <PlanDetails />
        <div className="btn-container">
          <button>Proceed to Payment</button>
          <a href="#">Cancel Order</a>
        </div>
      </div>
    </div>
  );
}

export default OrderSummaryCard;
