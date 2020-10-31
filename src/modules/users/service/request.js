// import controllocalStorage from './utils/js';
// var ControllocalStorage = new controllocalStorage();

const request = async (user) => {
  let data = !!localStorageGetItem(user.login)
    ? (() => {
        return localStorageGetItem(user.login);
      })()
    : (async () => {
        let data = await userInfo(user);
        localStorageSetItem(data.login, data);
        return data;
      })();
  return data;
};
