var campoFiltro = document.querySelector('#filtrar-users');
var radios = document.getElementsByName('ordenar');

var user = document.getElementById('user');
var org = document.getElementById('org');

var campovazio = () => {
  reset();
  for (let i = 0; i < qtd; i++) {
    let users = JSON.parse(localStorage.getItem(usersData[i].login));
    carregarUsers(users);
  }
};

campoFiltro.addEventListener('keypress', async (key) => {
  loader(true);
  if (key.which == 13) {
    await filtro(campoFiltro);
  }
  if (!campoFiltro.value) {
    campovazio();
  }
  loader(false);
});

campoFiltro.addEventListener('input', async () => {
  loader(true);
  if (!campoFiltro.value) {
    campovazio();
  } else {
    await filtro(campoFiltro);
  }
  loader(false);
});

window.addEventListener('scroll', () => {
  scroll();
});

user.addEventListener('click', () => {
  campoFiltro.value = '';
  if (!campoFiltro.value) {
    campovazio();
  }
});
org.addEventListener('click', () => {
  campoFiltro.value = '';
  if (!campoFiltro.value) {
    campovazio();
  }
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
