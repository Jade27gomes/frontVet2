import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Clínica Veterinária Bagdá</h2>
          <p className="slogan">
            Lugar onde o cuidado e o bem-estar do seu animal são nossa prioridade.
          </p>
        </div>
        <div className="footer-right">
          <h3>Contato</h3>
          <p>(11) 5565-6570</p>
          <p>(11) 9 3227-8374</p>
          <p>veterinariabagda@gmail.com</p>
          <p>Rua Cidade de Bagdá, 751</p>
          <p>Vila Mira, São Paulo - SP, 04377-036</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Clínica Veterinária Bagdá. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
