import stl from "./Card.module.css";
import { Link } from "react-router-dom";

function Card(props) {
  const pText = props.text;
  return (
    <div className={stl.contentor}>
      <div className={stl.text}>
        <p>{props.text}</p>
      </div>
      <div className={stl.button}>
        <Link to={props.route}>
          <button>{props.title}</button>
        </Link>
      </div>
    </div>
  ); //The style for this div is in the main.module.css file
}
export default Card;
