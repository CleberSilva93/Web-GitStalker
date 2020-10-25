var qtd = 0;
const scroll = async () => {
  console.log('Chamou');
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
    console.log('Executou');
    qtd = qtd + 8;
    loader(true);
    reset();
    // await newRequest();
    await (async () => {
      for (let i = 0; i < qtd + 8; i++) {
        let data = await (async () => {
          let data = !!localStorage.getItem(usersData[i].login)
            ? (() => {
                return JSON.parse(
                  localStorage.getItem(usersData[i].login),
                );
              })()
            : (async () => {
                let data = await userInfo(usersData[i]);
                localStorage.setItem(
                  data.login,
                  JSON.stringify(data),
                );
                return data;
              })();
          return data;
        })();
        carregarUsers(data);
      }
    })();
    loader(false);
  }
  loader(false);
};
