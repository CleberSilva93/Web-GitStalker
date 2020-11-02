export class controlLocalStorage {
  localStorageGetItem = (info) => {
    let dados = JSON.parse(localStorage.getItem(info));
    return dados;
  };

  localStorageSetItem = (key, dados) => {
    localStorage.setItem(key, JSON.stringify(dados));
  };
}
