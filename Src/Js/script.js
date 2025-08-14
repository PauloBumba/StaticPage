const toggleDarkModeBtn = document.createElement('button');
  toggleDarkModeBtn.id = 'toggleDarkMode';
  toggleDarkModeBtn.setAttribute('aria-label', 'Alternar modo escuro');
  toggleDarkModeBtn.innerHTML = '<i class="fas fa-moon"></i>';
  document.body.appendChild(toggleDarkModeBtn);

  function applyDarkMode(isDark) {
    if (isDark) {
      document.body.classList.add('dark-mode');
      toggleDarkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      document.body.classList.remove('dark-mode');
      toggleDarkModeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
  }

  // Load saved preference
  const savedTheme = localStorage.getItem('darkMode');
  applyDarkMode(savedTheme === 'true');

  toggleDarkModeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark);
    applyDarkMode(isDark);
  });

  // Saudação no formulário
  document.getElementById('formContato').addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    if (nome) {
      alert(`E aí, ${nome}! Bem-vindo ao meu portfólio! 🚀`);
    } else {
      alert('Fala aí, não esquece de digitar seu nome! 😎');
    }
  });
// Inicializa ScrollReveal
ScrollReveal().reveal('.card', {
  origin: 'bottom',      // De onde o card vem
  distance: '50px',      // Distância do efeito
  duration: 1000,        // Duração da animação (ms)
  delay: 100,            // Pequeno delay entre os elementos
  interval: 200,         // Intervalo para múltiplos elementos
  easing: 'ease-in-out', // Efeito de transição suave
  reset: false           // Se true, animação repete ao rolar novamente
});

  // Desenho simples no canvas
  const canvas = document.getElementById('meuCanvas');
  const ctx = canvas.getContext('2d');

  // Fundo
  ctx.fillStyle = '#0d6efd';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Círculo branco
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 70, 0, Math.PI * 2);
  ctx.fillStyle = '#fff';
  ctx.fill();

  // Texto estiloso
  ctx.fillStyle = '#0d6efd';
  ctx.font = 'bold 20px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Paulo', canvas.width / 2, canvas.height / 2 - 10);
  ctx.fillText('Bumba', canvas.width / 2, canvas.height / 2 + 20);