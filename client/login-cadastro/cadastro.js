const form = document.getElementById('register-form');
const message = document.getElementById('message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const first = form.first.value.trim();
  const last = form.last.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value.trim();
  const confirm = form.confirm.value.trim();
  const role = form.role.value;


  if (!first || !last || !email || !password || !confirm || !role) {
    message.textContent = 'Por favor, preencha todos os campos obrigatórios.';
    message.style.color = '#DC2626';
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    message.textContent = 'Digite um e-mail válido.';
    message.style.color = '#DC2626';
    return;
  }

  if (password !== confirm) {
    message.textContent = 'As senhas não coincidem.';
    message.style.color = '#DC2626';
    return;
  }

  message.style.color = '#16A34A';
  message.textContent = 'Cadastro realizado com sucesso!';

  setTimeout(() => {
    window.location.href = form.action;
  }, 1500);
});
