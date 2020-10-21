var modal = document.getElementById('modal');
const detalhada = (dados) => {
  console.log('Estamos testando');
  console.log(dados);
  modal.style.opacity = '1';
  modal.style.display = 'flex';
  document.querySelector('body').style.overflow = 'hidden';

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

  let user = JSON.parse(localStorage.getItem(dados));
  console.log(user.following);

  following.textContent = user.following;
  followers.textContent = user.followers;
  repos.textContent = user.public_repos;
  name.textContent = user.name == null ? user.login : user.name;
  bio.textContent = user.bio == null ? '   ' : user.bio;
  city.textContent = user.location;
  email.textContent = user.email;
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
