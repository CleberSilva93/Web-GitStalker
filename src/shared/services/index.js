import { controlLocalStorage } from './utils/controlLocalStorage.js';
import { loader } from './loaders.js';
// import * as elements from './getElements.js';

import { api } from './api/api.js';
import { reset } from './reset.js';
import { newRequest } from '../../modules/users/service/newRequest.js';

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
