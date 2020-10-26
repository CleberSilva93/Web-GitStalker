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

for (var el of radios) {
  el.addEventListener('click', async function () {
    if (this.value === 'data') {
      loader(true);
      await ordenar();
      // console.log(usersData);
      qtd = 0;
      reset();
      await newRequest();
      loader(false);
    }

    if (this.value === 'numrep') {
      console.log('Por repositório');
    }
    if (this.value === 'numfollowers') {
      console.log('Por número de seguidores');
    }
  });
}
