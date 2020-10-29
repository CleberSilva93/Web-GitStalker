const ordenar = async (tipo) => {
  console.log('Iniciou');
  await Promise.all(
    usersData.map(async (a) => {
      if (!localStorageGetItem(a.login)) {
        let data = await userInfo(a);
        localStorageSetItem(data.login, data);
      }
    }),
  );
  usersData.sort((a, b) => {
    let { first, second } = searchUser(a, b);
    // alterar a propriedade para dinâmica para poder alterar forme o tipo
    if (tipo === 'name') {
      first.name = first.name == null ? first.login : first.name;
      second.name = second.name == null ? second.login : second.name;
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
      if (first.followers < second.followers) {
        return 1;
      }
      if (first.followers > second.followers) {
        return -1;
      }
      return 0;
    }
    if (tipo === 'repos') {
      if (first.public_repos < second.public_repos) {
        return 1;
      }
      if (first.public_repos > second.public_repos) {
        return -1;
      }
      return 0;
    }
  });
};
