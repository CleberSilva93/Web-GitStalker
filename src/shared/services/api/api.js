import { controlLocalStorage } from '../../../shared/services/utils/controlLocalStorage.js';
var ControlLocalStorage = new controlLocalStorage();
export class api {
  // static usersData = [];

  carregarApi = async () => {
    let x = 2;
    // Loader(true);
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
          // Loader(false);
        }
        ControlLocalStorage.localStorageSetItem(
          'usersData',
          usersData,
        );
      }
    })();
  };
}
