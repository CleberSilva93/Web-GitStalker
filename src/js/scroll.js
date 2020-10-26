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
    qtd + 8 < usersData.length
  ) {
    if (qtd > usersData.length) {
      qtd = usersData.length;
    }
    loader(true);
    await newRequest();
    loader(false);
  }
  loader(false);
};
