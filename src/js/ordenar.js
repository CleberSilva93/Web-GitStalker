const ordenar = async () => {
  await Promise.all(
    usersData.sort((a, b) => {
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
      second.name = second.name == null ? second.login : second.name;
      if (first.name > second.name) {
        return 1;
      }
      if (first.name < second.name) {
        return -1;
      }
      return 0;
    }),
  );
};
