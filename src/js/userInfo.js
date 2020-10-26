const userInfo = (dados) => {
  const data = fetch(`${dados.url}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + `${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((erro) => console.log(erro));
  return data;
};
