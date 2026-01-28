'use client';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Carrega o script.js da pasta public
    const script = document.createElement('script');
    script.src = '/script.js';
    document.body.appendChild(script);
  }, []);

  return (
    <main>
      {/* Header */}
      <header>
        <div className="logo">Ana Paula Bordados</div>
        <nav>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Cursos</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Arte em Cada Ponto</h1>
        <p>Descubra o mundo encantador dos bordados personalizados com carinho e criatividade.</p>
        <div className="hero-buttons">
          <button className="btn-primary">Ver Galeria</button>
          <button className="btn-secondary">Fale Conosco</button>
        </div>
      </section>

      {/* Serviços */}
      <section className="section-content">
        <h2>Serviços</h2>
        <div className="servicos-grid">
          <div className="servico"><p>Bordado em Camisas</p></div>
          <div className="servico"><p>Bordado em Toalhas</p></div>
          <div className="servico"><p>Bordado Infantil</p></div>
        </div>
      </section>

      {/* Galeria */}
      <section className="section-content">
        <h2>Galeria</h2>
        <div className="gallery-carousel">
          <div className="carousel-container">
            <div className="carousel-item active">
              <img className="gallery-img" src="/img1.jpg" alt="Bordado 1" />
            </div>
            <div className="carousel-item">
              <img className="gallery-img" src="/img2.jpg" alt="Bordado 2" />
            </div>
          </div>
          <button className="carousel-btn prev">◀</button>
          <button className="carousel-btn next">▶</button>
        </div>
      </section>

      {/* Planos */}
      <section className="section-content">
        <h2>Planos</h2>
        <div className="planos">
          <div className="plano">
            <h3>Básico</h3>
            <p>R$ 99/mês</p>
          </div>
          <div className="plano">
            <h3>Premium</h3>
            <p>R$ 199/mês</p>
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section className="section-content">
        <h2>Cursos</h2>
        <div className="cursos-grid">
          <div className="curso">
            <img className="curso-img" src="/curso1.jpg" alt="Curso 1" />
            <h3>Curso de Bordado Livre</h3>
            <p>Aprenda técnicas criativas de bordado manual.</p>
          </div>
          <div className="curso">
            <img className="curso-img" src="/curso2.jpg" alt="Curso 2" />
            <h3>Curso de Bordado em Máquina</h3>
            <p>Domine o bordado automatizado com qualidade profissional.</p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="section-content">
        <h2>Contato</h2>
        <div className="contato-info">
          <p>Email: <a href="mailto:contato@bordados.com">contato@bordados.com</a></p>
          <p>WhatsApp: <a href="#">(71) 99999-9999</a></p>
        </div>
        <form id="contactForm">
          <input type="text" name="nome" placeholder="Seu nome" required />
          <input type="email" name="email" placeholder="Seu email" required />
          <textarea name="mensagem" placeholder="Sua mensagem" required></textarea>
          <button type="submit">Enviar</button>
        </form>
        <div id="formMessage"></div>
      </section>

      {/* Botão voltar ao topo */}
      <button id="backToTop">↑</button>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 Ana Paula Bordados</p>
      </footer>
    </main>
  );
}
