import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import landing1 from './assets/landing1.jpg';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="landing-image-container">
          <img src={landing1} alt="landing background" />
          <div className="item-list-overlay">
            <ItemListContainer />
            <div>
            <ItemDetailContainer />
          </div>
          </div>
          <div>
            <ItemDetailContainer />
          </div>
        </div>
        <div className="first-text-section">
          <p>
            Deléitate con la fusión perfecta de sabores Tex-Mex, donde la
            autenticidad se encuentra con un estilo contemporáneo.
          </p>
        </div>
        <div className="landing-second-section-container"></div>
        <div className="landing-third-section-container"></div>
        <div className="landing-forth-section-container"></div>
      </div>
    </>
  );
}

export default App;
