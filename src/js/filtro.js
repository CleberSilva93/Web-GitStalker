const filtro = async (input) => {
  reset();
  if (input.value.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
      let user = JSON.parse(
        localStorage.getItem(localStorage.key(i)),
      );
      let expressao = new RegExp(input.value, 'i'); // o i é para definir se é insensitive ou case-sensitive
      if (expressao.test(user.name) || expressao.test(user.type)) {
        carregarUsers(user);
      }
    }
  }
};
