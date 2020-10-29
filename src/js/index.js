var usersLocalStorage = localStorageGetItem('usersData');
if (!usersLocalStorage) {
  carregarApi().then(() => {
    reset();
    newRequest(usersData);
    loader(false);
  });
} else {
  carregarApi();
  reset();
  newRequest(usersLocalStorage);
  loader(false);
}
