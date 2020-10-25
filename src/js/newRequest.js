const newRequest = async () => {
  for (let i = qtd; i < qtd + 8; i++) {
    let data = await (async () => {
      let data = !!localStorage.getItem(usersData[i].login)
        ? (() => {
            return JSON.parse(
              localStorage.getItem(usersData[i].login),
            );
          })()
        : (async () => {
            let data = await userInfo(usersData[i]);
            localStorage.setItem(data.login, JSON.stringify(data));
            return data;
          })();
      return data;
    })();
    carregarUsers(data);
  }
};
