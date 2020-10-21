var usersData = [];
const token = '76b54959748e921c86ddace498c9fa0272e7c82a';
const carregarApi = async () => {
  if (localStorage.length == 0) {
    loader(true);
  }
  (() => {
    for (let i = 1; i < 5; i++) {
      fetch(
        `https://api.github.com/search/users?q=location:piracicaba&per_page=100&page=${i}`,
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer  ' + `${token}`,
          },
        },
      )
        .then((response) => response.json())
        .then((data) => {
          if (!(data.items == 0)) {
            data.items.forEach((user) => {
              usersData.push(user);
            });
          }
        })
        .catch((erro) => {
          console.log(erro);
          loader(false);
        });
    }
  })();
  loader(true);
  setTimeout(async () => {
    await (async () => {
      reset();
      qtd = qtd + 5;
      await (async () => {
        for (let i = 0; i < qtd; i++) {
          let data = await (async () => {
            let data = !!localStorage.getItem(usersData[i].login)
              ? (() => {
                  return JSON.parse(
                    localStorage.getItem(usersData[i].login),
                  );
                })()
              : (async () => {
                  let data = await userInfo(usersData[i]);
                  localStorage.setItem(
                    data.login,
                    JSON.stringify(data),
                  );
                  return data;
                })();
            return data;
          })();
          carregarUsers(data);
        }
      })();
      loader(false);
    })();
  }, 2000);
};
carregarApi();
