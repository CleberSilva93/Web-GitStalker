var GerarUser = (dados) => {
  let userdiv = `
  <div class="user"onclick="detalhada('${dados.login}')">
    <img src="${dados.avatar_url}">
    <div class="userinfo"><div class="userinfogeral">
      <h3>${dados.name}</h3>
      <div>
        <p>Seguidores: ${dados.followers}</p>
        <p>Tipo: ${dados.type}</p>
        <p>Número de repositórios: ${dados.public_repos}</p>
        </div>
        <div>
          <p>${dados.location}</p>
          <p>Cadastro: ${new Date(dados.created_at)
            .toISOString()
            .slice(0, 10)}</p>
        </div>
      </div>
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
      </svg>
    </div>
  </div>
  `;
  return userdiv;
};

const carregarUsers = (user) => {
  let users = document.querySelector('#users');
  users.innerHTML = users.innerHTML + GerarUser(user);
};
