const request = async (user) => {
  let data = !!localStorageGetItem(user.login)
    ? (() => {
        return localStorageGetItem(user.login);
      })()
    : (async () => {
        let data = await userInfo(user);
        console.log(data);
        localStorageSetItem(data.login, data);
        return data;
      })();
  return data;
};
