export const loader = (show) => {
  let loading = false;
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
  if (show) {
    document.getElementById('loading').style.display = 'block';
  } else {
    document.getElementById('loading').style.display = 'none';
  }
};
