let page = 1;
let username = 'CleberAugustz';
let password = '*367c3721*';
const carregarApi = () => {
  document.getElementById('loader').style.visibility = 'visible';
  fetch(
    `https://api.github.com/search/users?q=location:piracicaba&per_page=10&page=${page}`,
    {
      method: 'GET',
      headers: {
        Authorization: 'Basic ' + btoa(`${username}:${password}`),
      },
    },
  )
    .then((response) => response.json())
    .then((data) => {
      data.items.forEach(function (user) {
        carregarUsers(user);
      });
      page = page + 1;
      document.getElementById('loader').style.visibility = 'hidden';
    })
    .catch((erro) => console.log(erro));
};
