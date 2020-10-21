var loading = false;

const loader = (show) => {
  if (show) {
    document.querySelector('body').style.overflow = 'hidden';
    document.getElementById('teste').style.visibility = 'visible';
    loading = true;
  } else {
    document.getElementById('teste').style.visibility = 'hidden';
    document.querySelector('body').style.overflow = 'visible';
    loading = false;
  }
};
