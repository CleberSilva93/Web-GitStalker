const newRequest = async () => {
  for (let i = qtd; i < qtd + 8; i++) {
    let data = await request(usersData[i]);
    carregarUsers(data);
  }
  qtd = qtd + 8;
};
