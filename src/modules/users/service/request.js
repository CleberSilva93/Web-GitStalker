import { controlLocalStorage } from '../../../shared/services/utils/controlLocalStorage.js';
import { ApiUser } from './apiUser.js';
var ControllocalStorage = new controlLocalStorage();

export const request = async (user) => {
  let data = !!ControllocalStorage.localStorageGetItem(user.login)
    ? (() => {
        return ControllocalStorage.localStorageGetItem(user.login);
      })()
    : (async () => {
        let data = await ApiUser(user);
        ControllocalStorage.localStorageSetItem(data.login, data);
        return data;
      })();
  return data;
};
