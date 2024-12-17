import landing1 from '../assets/landing1.jpg';
import '../styles/PageComplement.css';

const PageLanding = () => {
  return (
    <>
  <img src={landing1} alt="landing background" />
  <div className="first-text-section">
    <p>
      Deléitate con la fusión perfecta de sabores Tex-Mex, donde la
      autenticidad se encuentra con un estilo contemporáneo.
    </p>
  </div>
  <div className="landing-second-section-container"></div>
  <div className="landing-third-section-container"></div>
  <div className="landing-forth-section-container"></div>
  </>
  )
}

export default PageLanding