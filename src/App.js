import "../src/styles/App.scss";
import NavBar from "./components/navBar/navBar";
import ItemListContainer from "./components/itemListContainer";
import RootContainer from "./components/rootContainer";
import ItemDetailContainer from "./components/itemDetailContainer.js";
import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import CartWidget from "./components/cartWidget";
import Nosotras from "./components/Nosotras";
import Politica from "./components/Politica";
import Contacto from "./components/Contacto";
import Cart from "./components/Cart";
import CartProvider, { CartContext } from "./context/CartContext";
import CategoryContainer from "./components/CategoryList";
import ProductsContainer from "./components/ProductsContainer";
import Footer from "./components/footer";




function App() {



  return (
 
<CartProvider >

    <RootContainer>
        <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ProductsContainer/>} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/nosotras" element={<Nosotras />} />
          <Route path="/productos" element={<ProductsContainer />} />
          
          <Route path="/politica" element={<Politica />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
        <Footer/>
    </BrowserRouter>
      </RootContainer>
</CartProvider>

  );
}

export default App;
