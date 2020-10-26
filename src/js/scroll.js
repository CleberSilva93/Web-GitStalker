var qtd = 0;
const scroll = async () => {
  loader(true);
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
    loading &&
    qtd < usersData.length
  ) {
    qtd = qtd + 8;
    loader(true);
    // reset();
    await newRequest();
    loader(false);
  }
  loader(false);
};
