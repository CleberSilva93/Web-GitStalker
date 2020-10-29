var loading = false;

const loader = (show) => {
  if (show) {
    document.querySelector('body').style.overflow = 'hidden';
    document.getElementById('divloading').style.display = 'block';
    loading = true;
  } else {
    document.getElementById('divloading').style.display = 'none';
    document.querySelector('body').style.overflow = 'visible';
    loading = false;
  }
};

const loaderOrdem = (show) => {
  if (show) {
    document.getElementById('loading').style.display = 'block';
  } else {
    document.getElementById('loading').style.display = 'none';
  }
};
