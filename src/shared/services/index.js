import loaders from './loaders.js';

// import controllocalStorage from './utils/controlLocalStorage.js';

// import api from './api/api.js';

// import newRequest from '../../modules/users/service/newRequest.js';

// var ControllocalStorage = new controllocalStorage();
var Loaders = new loaders();
// var Api = new api();
// var NewRequest = new newRequest();

const token = '76b54959748e921c86ddace498c9fa0272e7c82a';
var usersLocalStorage = localStorageGetItem('usersData');
if (!usersLocalStorage) {
  carregarApi().then(() => {
    reset();
    newRequest(usersData);
    Loaders.loader(false);
  });
} else {
  carregarApi();
  reset();
  newRequest(usersLocalStorage);
  Loaders.loader(false);
}
