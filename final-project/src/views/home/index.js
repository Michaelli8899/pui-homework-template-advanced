import HomePage from "./HomePage.js";
import Navbar from "../partials/NavBar";

function Index(props) {
  return (
    <div>
      <HomePage timeline={props.timeline} />
    </div>
  );
}

export default Index;
