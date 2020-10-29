const searchUser = (a, b) => {
  let first = localStorageGetItem(a.login);
  let second = localStorageGetItem(b.login);
  return { first, second };
};
