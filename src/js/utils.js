var localStorageGetItem = (info) => {
  let dados = JSON.parse(localStorage.getItem(info));
  return dados;
};

var localStorageSetItem = (key, dados) => {
  localStorage.setItem(key, JSON.stringify(dados));
};
