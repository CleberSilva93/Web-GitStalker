var campoFiltro = document.querySelector('#filtrar-users');

campoFiltro.addEventListener('keypress', async (key) => {
  loader(true);
  if (key.which == 13) {
    await filtro(campoFiltro);
  }
  if (!campoFiltro.value) {
    reset();

    for (let i = 0; i < qtd; i++) {
      let users = JSON.parse(
        localStorage.getItem(localStorage.key(i)),
      );
      carregarUsers(users);
    }
  }
  loader(false);
});

campoFiltro.addEventListener('input', async () => {
  loader(true);
  if (!campoFiltro.value) {
    reset();
    for (let i = 0; i < qtd; i++) {
      let users = JSON.parse(
        localStorage.getItem(localStorage.key(i)),
      );
      carregarUsers(users);
    }
  } else {
    await filtro(campoFiltro);
  }
  loader(false);
});

window.addEventListener('scroll', async () => {
  if (!!loader()) {
    console.log('executa');
    scroll();
  }
});
