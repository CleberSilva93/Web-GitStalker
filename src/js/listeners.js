var campoFiltro = document.querySelector('#filtrar-users');
var radios = document.getElementsByName('ordenar');

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

window.addEventListener('scroll', () => {
  scroll();
});

let ordenacao = (tipo) => {
  ordenar(tipo);
  reset();
  setTimeout(() => {
    qtd = 0;

    newRequest();
    loader(false);
  }, 10000);
};
for (var el of radios) {
  el.addEventListener('click', function () {
    campoFiltro.value = '';
    loader(true);
    if (this.value === 'data') {
      ordenacao('data');
    }
    if (this.value === 'numrep') {
      console.log('Entrou no num rep');
      ordenacao('repos');
    }
    if (this.value === 'numfollowers') {
      ordenacao('followers');
    }
    if (this.value === 'name') {
      ordenacao('name');
    }
  });
}
