import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Header from './components/Header';
import PageComplement from './components/PageComplement';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>

      <Navbar />
      <Header />
      <ItemListContainer greeting={"¡Hola! Bienvenidos a Paltamole"} />
      <ItemDetailContainer />
      <PageComplement />

    </>
  );
}

export default App;
