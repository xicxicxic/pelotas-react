import { Routes, Route, Router } from "react-router-dom";

import Header from "./components/Header";
import Main from "./pages/Main";
import Criar from "./pages/Criar";
import Calculadora from "./pages/Calculadora";
import Analisar from "./pages/Analisar";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
      </Routes>
      <Routes>
        <Route path="/criar" element={<Criar></Criar>}></Route>
      </Routes>
      <Routes>
        <Route path="/calculadora" element={<Calculadora></Calculadora>}></Route>
        <Route path="/calculadora/:id" element={<Calculadora></Calculadora>}></Route>
      </Routes>
      <Routes>
        <Route path="/analisar" element={<Analisar></Analisar>}></Route>
      </Routes>
    </div>
  );
}

export default App;
