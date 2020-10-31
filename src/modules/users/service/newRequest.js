const newRequest = async (users) => {
  for (let i = qtd; i < qtd + 8; i++) {
    await request(users[i]).then((user) => {
      GerarUsers(user);
    });
  }
  qtd = qtd + 8;
};
