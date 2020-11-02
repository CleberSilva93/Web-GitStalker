import { scroll } from './scroll.js';
import { loader, loaderOrdem } from './loaders.js';
import { ordenar } from './ordenar.js';
import { reset } from './reset.js';
import { controlLocalStorage } from './utils/controlLocalStorage.js';
import { newRequest } from '../../modules/users/service/newRequest.js';
import { ShowToast } from './toast.js';
import { GerarUsers } from '../../modules/users/service/GerarUsers.js';
import { filtro } from '../../modules/users/service/filtro.js';

let ControlLocalStorage = new controlLocalStorage();

let campovazio = async () => {
  reset();
  for (let i = 0; i < qtd; i++) {
    let user = await ControlLocalStorage.localStorageGetItem(
      usersData[i].login,
    );
    await GerarUsers(user);
  }
};

campoFiltro.addEventListener('keypress', (key) => {
  loader(true);
  if (key.which == 13) {
    filtro(campoFiltro);
  }
  if (!campoFiltro.value) {
    campovazio();
  }
  loader(false);
});

campoFiltro.addEventListener('input', async () => {
  loader(true);
  if (!campoFiltro.value) {
    await campovazio();
    wrapperdws.style.display = 'none';
  } else {
    wrapperdws.style.display = 'block';
  }
  loader(false);
});

window.addEventListener('scroll', () => {
  let scrollPos =
    parseInt(
      document.documentElement.scrollTop +
        document.documentElement.clientHeight,
    ) +
      1 >=
    document.documentElement.scrollHeight;
  if (
    scrollPos === true &&
    !campoFiltro.value &&
    qtd + 8 < usersData.length
  ) {
    scroll();
  }
});

user.addEventListener('click', async () => {
  loader(true);
  campoFiltro.value = '';
  wrapperdws.style.display = 'none';
  if (!campoFiltro.value) {
    await campovazio();
  }

  loader(false);
});
org.addEventListener('click', async () => {
  loader(true);
  campoFiltro.value = '';
  wrapperdws.style.display = 'none';
  if (!campoFiltro.value) {
    await campovazio();
  }
  loader(false);
});

for (var el of radios) {
  el.addEventListener('click', function () {
    campoFiltro.value = '';
    loaderOrdem(true);
    ordenar(this.value).then(() => {
      reset();
      qtd = 0;
      newRequest(usersData);
      loaderOrdem(false);
      ShowToast(`Ordenado por ${this.id}`);
    });
  });
}

wrapperdws.addEventListener('click', async () => {
  loader(true);
  await filtro(campoFiltro);
  loader(false);
});
