import { controlLocalStorage } from '../../../shared/services/utils/controlLocalStorage.js';
import { ShowToast } from '../toast.js';
var ControlLocalStorage = new controlLocalStorage();
export class api {
  // static usersData = [];

  carregarApi = async () => {
    let x = 2;
    await (async () => {
      for (let i = 1; i <= x; i++) {
        try {
          await fetch(
            `https://api.github.com/search/users?q=+location:piracicaba&per_page=100&page=${i}`,
            {
              method: 'GET',
              headers: {
                Accept: 'application/vnd.github.v3.text-match+json',
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
          ShowToast(
            'Houve um erro ao carregar a página, Aperte(F5).',
            'error',
          );
        }
        ControlLocalStorage.localStorageSetItem(
          'usersData',
          usersData,
        );
      }
    })();
  };
}
