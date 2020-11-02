import { controlLocalStorage } from './utils/controlLocalStorage.js';
import { ApiUser } from '../../modules/users/service/apiUser.js';
import { searchUser } from '../../modules/users/service/searchUser.js';

var ControlLocalStorage = new controlLocalStorage();

export const ordenar = async (tipo) => {
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
    // alterar a propriedade para dinâmica para poder alterar conforme o tipo
    if (tipo === 'name') {
      first.name = !first.name ? first.login : first.name;
      second.name = !second.name ? second.login : second.name;
      if (first.name > second.name) {
        return 1;
      }
      if (first.name < second.name) {
        return -1;
      }
      return 0;
    }
    if (tipo === 'data') {
      if (first.created_at > second.created_at) {
        return 1;
      }
      if (first.created_at < second.created_at) {
        return -1;
      }
      return 0;
    }
    if (tipo === 'followers') {
      if (first.followers < second.followers) {
        return 1;
      }
      if (first.followers > second.followers) {
        return -1;
      }
      return 0;
    }
    if (tipo === 'repos') {
      if (first.public_repos < second.public_repos) {
        return 1;
      }
      if (first.public_repos > second.public_repos) {
        return -1;
      }
      return 0;
    }
  });
};
