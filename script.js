const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index % 4, 3) * 80}ms`;
  observer.observe(item);
});

const date = document.querySelector('input[type="date"]');
date.min = new Date().toISOString().split('T')[0];

document.querySelector('#booking-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(event.currentTarget).get('name').trim();
  document.querySelector('.form-message').textContent = `Obrigada, ${name}! Seu pedido de reserva foi recebido.`;
  event.currentTarget.reset();
});
