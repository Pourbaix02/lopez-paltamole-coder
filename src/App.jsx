import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Header from './components/Header';
import PageComplement from './components/PageComplement';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"¡Hola! Bienvenidos a Paltamole"} />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting={"¡Hola! Bienvenidos a Paltamole"} />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
  
    <PageComplement />
    </BrowserRouter>
    </>
  );
}

export default App;
