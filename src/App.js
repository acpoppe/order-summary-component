import "./App.css";
import backgroundMobile from "./images/pattern-background-mobile.svg";
import backgroundDesktop from "./images/pattern-background-desktop.svg";
import useWindowDimensions from "./hooks/WindowDimensions";
import OrderSummaryCard from "./components/OrderSummaryCard";

function App() {
  const { width } = useWindowDimensions();
  const background = width > 600 ? backgroundDesktop : backgroundMobile;

  const styles = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 50%",
    backgroundOrigin: "border-box",
    minWidth: "100vw",
    minHeight: "100vh",
    position: "absolute",
    margin: 0,
    padding: 0,
  };

  return (
    <div className="App" style={styles}>
      <OrderSummaryCard />
    </div>
  );
}

export default App;
