const newRequestRepos = async (users) => {
  for (let i = qtd; i < qtd + 8; i++) {
    await request(users[i]).then((user) => {
      carregarUsers(user);
    });
  }
  qtd = qtd + 8;
};
