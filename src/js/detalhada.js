var modal = document.getElementById('modal');
const detalhada = (dados) => {
  modal.style.opacity = '1';
  modal.style.display = 'flex';
  document.querySelector('body').style.overflow = 'hidden';

  let type = document.getElementById('type');
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

  // remove
  let divemail = document.getElementById('divemail');
  let user = JSON.parse(localStorage.getItem(dados));
  type.setAttribute(
    'src',
    user.type == 'User'
      ? './assets/user.svg'
      : './assets/teamwork.svg',
  );
  photo.setAttribute('src', user.avatar_url);
  following.textContent = `Seguindo: ${user.following}`;
  followers.textContent = `Seguidores: ${user.followers}`;
  repos.textContent = `Repositórios: ${user.public_repos}`;
  name.textContent = user.name == null ? user.login : user.name;
  bio.textContent = user.bio == null ? '   ' : user.bio;
  city.textContent = user.location;
  email.textContent = !!user.email
    ? 'Entrou aqui'
    : (() => {
        divemail.remove();
      })();
  createddata.textContent = `Cadastro - ${new Date(user.created_at)
    .toISOString()
    .slice(0, 10)}`;

  lastupdated.textContent = `Update - ${new Date(user.updated_at)
    .toISOString()
    .slice(0, 10)}`;
};

const fecharmodal = () => {
  document.querySelector('.modal').style.display = 'none';
  document.querySelector('body').style.overflow = 'visible';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    document.querySelector('body').style.overflow = 'visible';
  }
};
