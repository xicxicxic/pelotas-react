import { useEffect, useState } from "react";
import axios from "axios";

function Analisar() {
  const [isLoading, setLoading] = useState(true);
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/jogador")
      .then((response) => {
        if (response.status === 200) return response.data;
        else throw Error("Erro");
      })
      .then((data) => {
        console.log(data);

        setLivros(data.jogador);
        setLoading(false);
      });
  }, []);


  function sendGet(){

    const lol = "lol"
    fetch("http://localhost:8000/bleh/",{
      method: 'POST',
      body:lol
    })
  }
  if (isLoading) {
    return (
      <div style={{ color: "black" }}>
        <p>Loading....</p>
      </div>
    );
  } else {
    return (
      <div style={{ color: "black" }}>
        <h1>Analisar jogador!</h1>
        <p>{livros}</p>
        <button onClick={sendGet}>Enviar fetch!</button>
      </div>
    );
  }
}

export default Analisar;
