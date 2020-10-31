const openModal = (dados) => {
  modal.style.display = 'flex';
  document.documentElement.style.overflow = 'hidden';

  let user = JSON.parse(localStorage.getItem(dados));
  openRepos(user);

  user.type == 'User'
    ? (() => {
        type.classList.add('badge__user');
        type.classList.remove('badge__organization');
        type.textContent = 'User';
      })()
    : (() => {
        type.classList.remove('badge__user');
        type.classList.add('badge__organization');
        type.textContent = 'Organization';
      })();

  photo.setAttribute('src', user.avatar_url);
  following.textContent = `Seguindo: ${user.following}`;
  followers.textContent = `Seguidores: ${user.followers}`;
  repos.textContent = `Repositórios: ${user.public_repos}`;
  name.textContent = user.name == null ? user.login : user.name;
  bio.textContent = user.bio == null ? user.login : user.bio;
  city.textContent = user.location;
  email.textContent = !!user.email
    ? (() => {
        divemail.style.visibility = 'visible';
        return user.email;
      })()
    : !!user.blog
    ? (() => {
        divemail.style.visibility = 'visible';
        divemail.childNodes[1].src = './src/assets/blog.svg';
        return user.blog;
      })()
    : (() => {
        divemail.style.visibility = 'hidden';
        return;
      })();
  createddata.textContent = `Cadastro - ${new Date(user.created_at)
    .toISOString()
    .slice(0, 10)}`;

  lastupdated.textContent = `Update - ${new Date(user.updated_at)
    .toISOString()
    .slice(0, 10)}`;
};

const fecharmodal = () => {
  currentpage = 0;
  modal.style.display = 'none';
  document.documentElement.style.overflow = 'visible';
};

window.onclick = function (event) {
  if (event.target == modal) {
    currentpage = 0;
    modal.style.display = 'none';
    document.documentElement.style.overflow = 'visible';
  }
};
