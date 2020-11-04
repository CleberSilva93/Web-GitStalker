export class controlLocalStorage {
  localStorageGetItem = (info) => {
    if (!!localStorage.getItem(info)) {
      let dados = JSON.parse(localStorage.getItem(info));
      return dados;
    }
  };

  localStorageSetItem = (key, dados) => {
    localStorage.setItem(key, JSON.stringify(dados));
  };
}
