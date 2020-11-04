import { scroll } from './scroll.js';
import { loader, loaderOrdem } from './loaders.js';
import { ordenar } from './ordenar.js';
import { reset } from './reset.js';
import { newRequest } from '../../modules/users/service/newRequest.js';
import { request } from '../../modules/users/service/request.js';
import { ShowToast } from './toast.js';
import { GerarUsers } from '../../modules/users/service/GerarUsers.js';
import { filtro } from '../../modules/users/service/filtro.js';

let campovazio = async () => {
  reset();
  for (let i = 0; i < qtd; i++) {
    await request(usersData[i]).then((data) => {
      GerarUsers(data);
    });
  }
};

campoFiltro.addEventListener('keypress', (key) => {
  if (key.which == 13) {
    campoFiltro.blur();
    filtro(campoFiltro);
  }
  if (!campoFiltro.value) {
    campovazio();
  }
});

campoFiltro.addEventListener('input', async () => {
  if (!campoFiltro.value) {
    await campovazio();
    wrapperdws.style.display = 'none';
  } else {
    wrapperdws.style.display = 'block';
  }
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
    qtd + 8 < usersData.length &&
    !loading
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

      ShowToast(`Ordenado por ${this.id}`, 'notification');
    });
  });
}

wrapperdws.addEventListener('click', async () => {
  campoFiltro.blur();
  await filtro(campoFiltro);
});
