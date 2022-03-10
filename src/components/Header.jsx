import stl from "./Header.module.css";
import logo from "./images/logomelhor.png";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={stl.container}>
      <div className={stl.imageFrame}>
        <Link to={"/"}>
          <img className={stl.image} src={logo}></img>
        </Link>
      </div>
      <nav className={stl.navigation}>
        <a>Criar</a>
        <a>Calculadora</a>
        <a>Analisar</a>
      </nav>
    </div>
  );
}

export default Header;
