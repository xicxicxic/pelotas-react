import { Routes, Route, Router } from "react-router-dom";

import Header from "./components/Header";
import Main from "./pages/Main";
import Criar from "./pages/Criar";
import Calculadora from "./pages/Calculadora";
import Analisar from "./pages/Analisar";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/criar" element={<Criar />}></Route>
        <Route path="/calculadora" element={<Calculadora />}></Route>
        <Route path="/calculadora/:id" element={<Calculadora />}></Route>
        <Route path="/analisar" element={<Analisar />}></Route>
      </Routes>
    </div>
  );
}

export default App;
