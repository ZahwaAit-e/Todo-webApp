import "./card.css";

const Card = ({ taskObj }) => {
  return (
    <div className="card-wrapper mr-5">
      <div
        className="card-top"
        style={{
          "background-color": "#FF9EAA",
        }}
      ></div>
      <div className="task-holder">
        <span
          className="card-header"
          style={{ "background-color": "#FFD0D0", "border-radius": "10px" }}
        >
          {taskObj.Name}
        </span>
        <span className="card-Description">{taskObj.Description}</span>
      </div>
    </div>
  );
};

export default Card;

