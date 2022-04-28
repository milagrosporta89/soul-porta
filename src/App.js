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
import Cart from "./components/Cart";
import CartProvider, { CartContext } from "./context/CartContext";
import CategoryContainer from "./components/CategoryList";
import ProductsContainer from "./components/ProductsContainer";
import Footer from "./components/footer";
import FooterLower from "./components/footerLower";
import Login from "./components/login";
import Register from "./components/register";
import RegisterNoAuth from "./components/register/registerNoAuth";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
    <CartProvider>
      <RootContainer>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ProductsContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/nosotras" element={<Nosotras />} />
            <Route path="/productos" element={<ProductsContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<RegisterNoAuth />} />
            <Route path="/politica" element={<Politica />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </RootContainer>
      <FooterLower />
    </CartProvider>
    </AuthProvider>
  );
}

export default App;
