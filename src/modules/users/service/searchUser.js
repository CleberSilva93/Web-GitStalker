import { controlLocalStorage } from '../../../shared/services/utils/controlLocalStorage.js';
var ControlLocalStorage = new controlLocalStorage();

export const searchUser = (a, b) => {
  let first = ControlLocalStorage.localStorageGetItem(a.login);
  let second = ControlLocalStorage.localStorageGetItem(b.login);
  return { first, second };
};

export const searchUserApi = async (dados) => {
  const data = await fetch(`${dados}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + `${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((erro) => {
      spinner.style.display = 'none';
      spinnerText.style.display = 'block';
      spinnerText.style.color = 'red';
      spinnerText.textContent =
        'Houve um erro, atualize a página. Aperte (F5).';
    });
  return data;
};
