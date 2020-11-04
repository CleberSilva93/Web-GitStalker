import { controlLocalStorage } from './utils/controlLocalStorage.js';
import { ApiUser } from '../../modules/users/service/apiUser.js';
import { searchUser } from '../../modules/users/service/searchUser.js';

var ControlLocalStorage = new controlLocalStorage();

export const ordenar = async (tipo) => {
  try {
    await Promise.all(
      usersData.map(async (a) => {
        if (!ControlLocalStorage.localStorageGetItem(a.login)) {
          let data = await ApiUser(a);
          ControlLocalStorage.localStorageSetItem(data.login, data);
        }
      }),
    );
    usersData.sort((a, b) => {
      let { first, second } = searchUser(a, b);
      switch (tipo) {
        case 'name': {
          first.name = !!first.name ? first.name : first.login;
          second.name = !!second.name ? second.name : second.login;
          if (first.name > second.name) {
            return 1;
          }
          if (first.name < second.name) {
            return -1;
          }
          return 0;
        }
        case 'data': {
          if (first.created_at > second.created_at) {
            return 1;
          }
          if (first.created_at < second.created_at) {
            return -1;
          }
          return 0;
        }

        case 'followers': {
          if (first.followers < second.followers) {
            return 1;
          }
          if (first.followers > second.followers) {
            return -1;
          }
          return 0;
        }
        case 'repos': {
          if (first.public_repos < second.public_repos) {
            return 1;
          }
          if (first.public_repos > second.public_repos) {
            return -1;
          }
          return 0;
        }
        default: {
          console.log('Houve um erro!');
        }
      }
    });
  } catch (error) {
    spinner.style.display = 'none';
    spinnerText.style.display = 'block';
    spinnerText.style.color = 'red';
    spinnerText.textContent =
      'Houve um erro, atualize a página. Aperte (F5).';
    console.log(error);
  }
};
