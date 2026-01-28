// Carrossel
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;

  function showItem(index) {
    items.forEach((item, i) => {
      item.style.transform = `translateX(${(i - index) * 100}%)`;
    });
  }

  document.querySelector(".carousel-btn.next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
  });

  document.querySelector(".carousel-btn.prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
  });

  showItem(currentIndex);
});

// Botão voltar ao topo
window.addEventListener("scroll", () => {
  const backToTop = document.getElementById("backToTop");
  if (window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Formulário de contato
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formMessage = document.getElementById("formMessage");

    const dados = {
      nome: contactForm.nome.value,
      email: contactForm.email.value,
      mensagem: contactForm.mensagem.value,
    };

    try {
      const resposta = await fetch("/api/clientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      if (resposta.ok) {
        formMessage.textContent = "Mensagem enviada e salva com sucesso!";
        formMessage.style.color = "green";
        contactForm.reset();
      } else {
        formMessage.textContent = "Erro ao salvar mensagem.";
        formMessage.style.color = "red";
      }
    } catch (error) {
      formMessage.textContent = "Erro de conexão.";
      formMessage.style.color = "red";
    }
  });
}
