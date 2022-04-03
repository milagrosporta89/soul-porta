import "../src/styles/App.scss";
import NavBar from "./components/navBar/navBar";
import ItemListContainer from "./components/itemListContainer";
import RootContainer from "./components/rootContainer";
import ItemDetailContainer from "./components/itemDetailContainer.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CartWidget from "./components/cartWidget";
import Nosotras from "./components/Nosotras";
import Politica from "./components/Politica";
import Contacto from "./components/Contacto";
import Categorias from "./components/Categorias";

function App() {
  return (
 

    <RootContainer>
        <BrowserRouter>
        <NavBar />
        <Categorias/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/nosotras" element={<Nosotras />} />
          
          <Route path="/politica" element={<Politica />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<Contacto />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </BrowserRouter>
      </RootContainer>

  );
}

export default App;
