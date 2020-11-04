export const loader = (show) => {
  loading = false;
  if (show) {
    body.style.overflow = 'hidden';
    divloading.style.display = 'block';
    loading = true;
  } else {
    divloading.style.display = 'none';
    body.style.overflow = 'visible';
    loading = false;
  }
};

export const loaderOrdem = (show) => {
  loaderOrdemLoading = false;
  if (show) {
    document.getElementById('loading').style.display = 'block';
    loaderOrdemLoading = true;
  } else {
    document.getElementById('loading').style.display = 'none';
    loaderOrdemLoading = false;
  }
};
