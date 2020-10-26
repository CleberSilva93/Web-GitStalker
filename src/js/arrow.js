const arrow = (to) => {
  if (to == 'down') {
    window.scrollTo(0, document.documentElement.scrollHeight);
  }

  if (to == 'up') {
    window.scrollTo(0, 0);
  }
};
