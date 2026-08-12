import "./App.css";
import Inicio from "./pages/Inicio";
import Sobre from "./pages/Sobre";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
