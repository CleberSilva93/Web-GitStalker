var usersData = [];

const carregarApi = async () => {
  if (localStorage.length == 0) {
    loader(true);
  }
  for (let i = 1; i < 5; i++) {
    fetch(
      `https://api.github.com/search/users?q=location:piracicaba&per_page=100&page=${i}`,
      {
        method: 'GET',
        headers: {
          Authorization: 'Basic ' + btoa(`${username}:${password}`),
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
  loader(true);
  setTimeout(
    (async () => {
      reset();
      qtd = qtd + 5;

      for (let i = 0; i < qtd; i++) {
        let user = () => {
          let data = !!localStorage.getItem(usersData[i].login)
            ? (() => {
                return JSON.parse(
                  localStorage.getItem(usersData[i].login),
                );
              })()
            : (async () => {
                let data = userInfo(usersData[i]);
                localStorage.setItem(
                  data.login,
                  JSON.stringify(data),
                );
                return await data;
              })();
          console.log(data);
        };
        console.log(user);

        (async () => {
          await carregarUsers(user);
        })();
      }
      loader(false);

      // for (let i = 0; i < qtd; i++) {
      //   (async () => {
      //     let data = !!localStorage.getItem(usersData[i].login)
      //       ? (() => {
      //           return JSON.parse(
      //             localStorage.getItem(usersData[i].login),
      //           );
      //         })()
      //       : (async () => {
      //           let data = await userInfo(usersData[i]);
      //           localStorage.setItem(
      //             data.login,
      //             JSON.stringify(data),
      //           );
      //           return data;
      //         })();
      //     return data;
      //   }).then(
      //     ((user) => {
      //       console.log(user);
      //       carregarUsers(user);
      //     })(),
      //   )();
      // }
    })(),
    2000,
  );
};
carregarApi();

// then(
//   (() => {
//     loader(false);
//   })(),
// );
