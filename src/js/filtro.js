const filtro = async (input) => {
  reset();
  if (input.value.length > 0) {
    for (let i = 0; i < usersData.length; i++) {
      let user =
        JSON.parse(localStorage.getItem(usersData[i].login)) == null
          ? (async () => {
              return await request(usersData[i]);
            })()
          : JSON.parse(localStorage.getItem(usersData[i].login));

      let expressao = new RegExp(input.value, 'i'); // o i é para definir se é insensitive ou case-sensitive
      if (
        expressao.test(user.name) ||
        expressao.test(user.type) ||
        expressao.test(user.login)
      ) {
        carregarUsers(user);
      }
    }
  }
};
