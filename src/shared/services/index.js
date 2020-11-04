import { controlLocalStorage } from './utils/controlLocalStorage.js';
import { loader } from './loaders.js';

import { api } from './api/api.js';
import { reset } from './reset.js';
import { newRequest } from '../../modules/users/service/newRequest.js';
import { openModal, fecharmodal } from './modal.js';

(() => {
  OpenModal = openModal;
  FecharModal = fecharmodal;
})();

window.onclick = function (event) {
  if (event.target == modal) {
    currentpage = 0;
    modal.style.display = 'none';
    document.documentElement.style.overflow = 'visible';
  }
};

var ControlLocalStorage = new controlLocalStorage();
var { carregarApi } = new api();
var Loader = loader;

var usersLocalStorage = ControlLocalStorage.localStorageGetItem(
  'usersData',
);

if (!usersLocalStorage) {
  carregarApi().then(() => {
    reset();
    newRequest(usersData);
    Loader(false);
  });
} else {
  carregarApi();
  reset();
  newRequest(usersLocalStorage);
  Loader(false);
}
