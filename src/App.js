import './App.css';
import Menu from "./components/Menu/menu";
import Home from "./components/Home/home";
import Personajes from "./components/personajes";
import Citas from "./components/citas";
import Episodios from "./components/Episodios/episodios";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Menu/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/citas" element={<Citas />} />
          <Route path="/episodios" element={<Episodios />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
