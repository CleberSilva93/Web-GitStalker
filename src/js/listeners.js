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

window.addEventListener('scroll', async () => {
  scroll();
});

for (var el of radios) {
  el.addEventListener('click', function () {
    if (this.value === 'data') {
      loader(true);
      (async () => {
        await usersData.sort((a, b) => {
          let first =
            JSON.parse(localStorage.getItem(a.login)) == null
              ? (async () => {
                  let dados = await userInfo(a);
                  console.log(dados.login);
                  localStorage.setItem(
                    dados.login,
                    JSON.stringify(dados),
                  );
                  return dados;
                })()
              : JSON.parse(localStorage.getItem(a.login));
          let second =
            JSON.parse(localStorage.getItem(b.login)) == null
              ? (async () => {
                  let dados = await userInfo(b);
                  localStorage.setItem(
                    dados.login,
                    JSON.stringify(dados),
                  );
                  return dados;
                })()
              : JSON.parse(localStorage.getItem(b.login));

          first.name = first.name == null ? first.login : first.name;
          second.name =
            second.name == null ? second.login : second.name;

          if (first.name > second.name) {
            return 1;
          }
          if (first.name < second.name) {
            return -1;
          }
          return 0;
        });
        console.log(usersData);
        qtd = 0;
        reset();
        newRequest();
        loader(false);
      })();
    }
  });
}
