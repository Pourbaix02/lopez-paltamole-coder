const Footer = () => {
  return (
    <footer
      className="d-flex flex-column align-items-center py-4"
      style={{
        backgroundColor: "#556FAD", // Color de fondo
        color: "#fff", // Color del texto
        fontSize: "0.85rem",
      }}
    >
      {/* Logo o título */}
      <div className="mb-4">
        <h2 style={{ color: "#D2B400", fontFamily: "'DM Serif Text', serif" }}>
          Paltamole Tex-Mex
        </h2>
      </div>

      {/* Redes sociales */}
      <div className="mb-4">
        <ul className="list-unstyled d-flex gap-4">
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none"
              style={{ fontSize: "1rem" }}
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none"
              style={{ fontSize: "1rem" }}
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none"
              style={{ fontSize: "1rem" }}
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="mt-4" style={{ fontSize: "0.75rem" }}>
        <p>&copy; 2024 Fusion Tex-Mex. Todos los derechos reservados.</p>
        <p className="text-center">Hecho por Pourbaix.</p>
      </div>
    </footer>
  );
};

export default Footer;
