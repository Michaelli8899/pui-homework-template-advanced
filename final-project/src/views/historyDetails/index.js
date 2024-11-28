import HomePage from "./HomePage.js";

function Index(props) {
  return (
    <div>
      <HomePage timeline={props.timeline} />
    </div>
  );
}

export default Index;
