'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  // Estados para pedidos
  const [cliente, setCliente] = useState('');
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState(1);
  const [pedidos, setPedidos] = useState([]);

  // Carregar pedidos existentes
  useEffect(() => {
    fetch('/api/pedidos')
      .then(res => res.json())
      .then(data => setPedidos(data));
  }, []);

  // Enviar novo pedido
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const resposta = await fetch('/api/pedidos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cliente, produto, quantidade })
    });

    if (resposta.ok) {
      alert('Pedido criado com sucesso!');
      setCliente('');
      setProduto('');
      setQuantidade(1);
      const novosPedidos = await fetch('/api/pedidos').then(res => res.json());
      setPedidos(novosPedidos);
    }
  };

  // Carregar script.js para carrossel e botão voltar ao topo
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/script.js';
    document.body.appendChild(script);
  }, []);

  return (
    <main>
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

      <section className="hero">
        <h1>Arte em Cada Ponto</h1>
        <p>Descubra o mundo encantador dos bordados personalizados com carinho e criatividade.</p>
        <div className="hero-buttons">
          <button className="btn-primary">Ver Galeria</button>
          <button className="btn-secondary">Fale Conosco</button>
        </div>
      </section>

      <section className="section-content">
        <h2>Serviços</h2>
        <div className="servicos-grid">
          <div className="servico"><p>Bordado em Camisas</p></div>
          <div className="servico"><p>Bordado em Toalhas</p></div>
          <div className="servico"><p>Bordado Infantil</p></div>
        </div>
      </section>

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

      <section className="section-content">
        <h2>Pedidos</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome do cliente"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Produto"
            value={produto}
            onChange={(e) => setProduto(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Quantidade"
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
            required
          />
          <button type="submit">Salvar Pedido</button>
        </form>

        <ul>
          {pedidos.map((p, i) => (
            <li key={i}>
              {p.cliente} pediu {p.quantidade}x {p.produto}
            </li>
          ))}
        </ul>
      </section>

      <button id="backToTop">↑</button>

      <footer>
        <p>&copy; 2026 Ana Paula Bordados</p>
      </footer>
    </main>
  );
}
