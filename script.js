const buttonLogin = document.getElementById('btn-sub');
const emailUser = document.getElementById('userEmail');
const pass = document.getElementById('userPassword');
buttonLogin.addEventListener('click', (event) => {
  event.preventDefault();
  if (emailUser.value === 'tryber@teste.com' && pass.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
