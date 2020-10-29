var modal = document.getElementById('modal');
const openModal = (dados) => {
  modal.style.display = 'flex';
  document.querySelector('body').style.overflow = 'hidden';

  let type = document.getElementById('badge');
  let photo = document.getElementById('photo');
  let following = document.getElementById('following');
  let followers = document.getElementById('followers');
  let repos = document.getElementById('repos');
  let name = document.getElementById('name');
  let bio = document.getElementById('bio');
  let city = document.getElementById('city');
  let email = document.getElementById('email');
  let createddata = document.getElementById('createddata');
  let lastupdated = document.getElementById('lastupdated');

  let divemail = document.getElementById('divemail');
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
        divemail.childNodes[1].src = './assets/blog.svg';
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
  document.querySelector('.modal').style.display = 'none';
  document.querySelector('body').style.overflow = 'visible';
};

window.onclick = function (event) {
  if (event.target == modal) {
    currentpage = 0;
    modal.style.display = 'none';
    document.querySelector('body').style.overflow = 'visible';
  }
};
