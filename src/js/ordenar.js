var request = async (info) => {
  let dados = await userInfo(info);
  localStorage.setItem(dados.login, JSON.stringify(dados));
  return dados;
};

const ordenar = (tipo) => {
  (() => {
    (() => {
      usersData.sort((a, b) => {
        let first =
          JSON.parse(localStorage.getItem(a.login)) == null
            ? (async () => {
                return await request(a);
              })()
            : JSON.parse(localStorage.getItem(a.login));

        let second =
          JSON.parse(localStorage.getItem(b.login)) == null
            ? (async () => {
                return await request(b);
              })()
            : JSON.parse(localStorage.getItem(b.login));
        console.log(tipo);
        if (tipo === 'name') {
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
        }
        if (tipo === 'data') {
          if (first.created_at > second.created_at) {
            return 1;
          }
          if (first.created_at < second.created_at) {
            return -1;
          }
          return 0;
        }
        if (tipo === 'followers') {
          if (first.followers > second.followers) {
            return 1;
          }
          if (first.followers < second.followers) {
            return -1;
          }
          return 0;
        }
        if (tipo === 'repos') {
          console.log('Entrou aqui');
          if (first.public_repos > second.public_repos) {
            return 1;
          }
          if (first.public_repos < second.public_repos) {
            return -1;
          }
          return 0;
        }
      });
      return;
    })();
  })();
};
