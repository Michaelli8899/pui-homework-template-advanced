function HoverCard(props) {
  return (
    <div className="hover-card">
      <h3 className="bold">
        {props.title}
        <span className="chinese">{props.chinese}</span>
      </h3>
      <p>{props.description}</p>
    </div>
  );
}

export default HoverCard;
