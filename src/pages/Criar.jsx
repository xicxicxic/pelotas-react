import stl from "./Criar.module.css";
import { useRef } from "react";
import { Jogador } from "../objects/Jogador.tsx";

function Criar() {
  const nomeRef = useRef();
  const apelidoRef = useRef();
  const alcunhaRef = useRef();

  function createHandler(event) {
    event.preventDefault();
    const nome = nomeRef.current.value;
    const apelido = apelidoRef.current.value;
    const alcunha = alcunhaRef.current.value;

    const novoJogador = new Jogador(nome, apelido, alcunha);

    console.log(novoJogador);
  }

  return (
    <div className={stl.container}>
      <h1>Criar jogador!</h1>
      <div className={stl.form}>
        <form onSubmit={createHandler}>
          <label>Primeiro Nome:</label>
          <input id="primeiro_nome" type="text" required ref={nomeRef} />
          <label>Apelido:</label>
          <input id="apelido" type="text" ref={apelidoRef} />
          <label>Alcunha:</label>
          <input id="alcunha" type="text" ref={alcunhaRef} />
          <button>Criar Jogador</button>
        </form>
      </div>
    </div>
  );
}

export default Criar;
