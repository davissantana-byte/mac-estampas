const form = document.getElementById('login-form');
const message = document.getElementById('message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = form.email.value.trim();
  const password = form.password.value.trim();

  if (!email || !password) {
    message.textContent = 'Por favor, preencha todos os campos.';
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    message.textContent = 'Digite um e-mail válido.';
    return;
  }

  message.style.color = '#16A34A'; // verde
  message.textContent = 'Login efetuado com sucesso!';

  setTimeout(() => {
    window.location.href = form.action;
  }, 1500);
});
