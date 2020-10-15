let campoFiltro = document.querySelector('#filtrar-users');

campoFiltro.addEventListener('input', function () {
  var users = document.querySelectorAll('.user');
  if (this.value.length > 0) {
    for (let i = 0; i < users.length; i++) {
      let user = users[i];
      let h2nome = user.querySelector('h2');
      let nome = h2nome.textContent;
      let expressao = new RegExp(this.value, 'i'); // o i é para definir se é insensitive ou case-sensitive
      if (!expressao.test(nome)) {
        user.classList.add('invisible');
      } else {
        user.classList.remove('invisible');
      }
    }
  } else {
    for (let i = 0; i < users.length; i++) {
      let user = users[i];
      user.classList.remove('invisible');
    }
  }
});
