export const ShowToast = (texto) => {
  var x = document.getElementById('snackbar');
  x.className = 'show';
  x.textContent = texto;
  setTimeout(() => {
    x.className = x.className.replace('show', '');
  }, 3000);
};
