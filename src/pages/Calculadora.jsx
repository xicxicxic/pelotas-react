import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCount, increment } from "../features/counter/counterSlice";
function Calculadora() {
  let { id } = useParams();
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div style={{ color: "black" }}>
      <h1>{id}</h1>
      <div>
        <h2>Redux increment</h2>
        <button onClick={() => dispatch(increment())}>{count}</button>
      </div>
    </div>
  );
}

export default Calculadora;
