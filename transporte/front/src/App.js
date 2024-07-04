import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './componentes/Header';
import Nav from './componentes/Nav';
import Footer from './componentes/Footer .js';


import ContactoPage from './page/ContactoPage.js';
import HomePage from './page/HomePage.js';
import NosotrosPage from './page/NosotrosPage.js';
import NovedadesPage from './page/NovedadesPage.js';


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
