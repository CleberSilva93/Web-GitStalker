// import loaders from './loaders.js';

// let Loaders = new loaders();
var usersData = [];
const token = '76b54959748e921c86ddace498c9fa0272e7c82a';
let info;
let x = 2;
// export default class api {
const carregarApi = async () => {
  loader(true);
  await (async () => {
    for (let i = 1; i <= x; i++) {
      try {
        await fetch(
          `https://api.github.com/search/users?q=+location:piracicaba+sort:author-date&per_page=100&page=${i}`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
          .then((response) => response.json())
          .then((data) => {
            x = Math.round(data.total_count / 100);
            data.items.forEach((user) => {
              usersData.push(user);
            });
          });
      } catch (error) {
        console.log(error);
        loader(false);
      }
      localStorageSetItem('usersData', usersData);
    }
  })();
};
// }
