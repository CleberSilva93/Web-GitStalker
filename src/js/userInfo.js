// let username = 'CleberAugustz';
// let password = '*367c3721*';
const userInfo = async (dados) => {
  const data = await fetch(`${dados.url}`, {
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
