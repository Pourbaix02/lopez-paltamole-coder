import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Header from './components/Header';
import PageComplement from './components/PageComplement';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import Checkout from './components/Checkout';

function App() {
  return (
    <>
    <CartProvider>
    <BrowserRouter>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"¡Hola! Bienvenidos a Paltamole"}/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<CartContainer/>} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
  
    <PageComplement />
    </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
