import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './componentes/Header';
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';


import ContactoPage from './pages/ContactoPage.js';
import HomePage from './pages/HomePage.js';
import NosotrosPage from './pages/NosotrosPage.js';
import NovedadesPage from './pages/NovedadesPage.js';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/novedades" element={<NovedadesPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />


    </div>
  );
}

export default App;
