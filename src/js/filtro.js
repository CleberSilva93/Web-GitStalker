const filtro = async (input) => {
  reset();
  let filtrando = (tipo, i) => {
    let user =
      JSON.parse(localStorage.getItem(usersData[i].login)) == null
        ? (async () => {
            return await request(usersData[i]);
          })()
        : JSON.parse(localStorage.getItem(usersData[i].login));
    let expressao = new RegExp(input.value, 'i'); // o i é para definir se é insensitive ou case-sensitive
    if (
      (expressao.test(user.name) ||
        expressao.test(user.type) ||
        expressao.test(user.login)) &&
      (tipo == '' ? true : user.type == tipo)
    ) {
      carregarUsers(user);
    }
  };
  if (input.value.length > 0) {
    for (let i = 0; i < usersData.length; i++) {
      if (
        (user.checked == true && org.checked == true) ||
        (user.checked == false && org.checked == false)
      ) {
        filtrando('', i);
      } else if (user.checked == true) {
        filtrando('User', i);
      } else if (org.checked == true) {
        filtrando('Organization', i);
      }
    }
  }
};
