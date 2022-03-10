import { Link } from "react-router-dom";
import Card from "../components/Card";
import stl from "./Main.module.css";

const DUMMY =
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32";

function Main(props) {
  return (
    <div className={stl.container}>
      <div id={stl.left} className={stl.painel}>
        <Card
          text={"Criar um novo jogador para a Pelotada. "}
          title={"Criar!"}
          route={"/criar"}
        ></Card>
      </div>

      <div id={stl.mid} className={stl.painel}>
        <Card
          text={"Calculadora e adicionar dados de jogo."}
          route={"/calculadora"}
          title={"Calculadora!"}
        ></Card>
      </div>

      <div id={stl.right} className={stl.painel}>
        <Card
          text={"Analisar dados e ferramentas extra."}
          title={"Analisar!"}
          route={"/analisar"}
        ></Card>
      </div>
    </div>
  );
}

export default Main;
