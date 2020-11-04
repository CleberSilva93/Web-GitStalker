import { loaderOrdem } from './loaders.js';
export const ShowToast = (texto, tipo) => {
  var x = document.getElementById('snackbar');
  if (tipo == 'notification') {
    x.className = 'shownot';
    x.textContent = texto;
    setTimeout(() => {
      x.className = x.className.replace('shownot', '');
      loaderOrdem(false);
    }, 2000);
  } else {
    x.className = 'showerror';
    x.textContent = texto;
    setTimeout(() => {
      x.className = x.className.replace('showerror', '');
    }, 3000);
  }
};
