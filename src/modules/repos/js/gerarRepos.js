const GerarRepos = (repos) => {
  let repository = GerarRepo(gerarElementosRepos(), repos);
  repositories.appendChild(repository.divRepos);
};

var gerarElementosRepos = () => {
  let elementos = {
    divRepos: document.createElement('div'),
    divInfo1: document.createElement('div'),
    divInfo2: document.createElement('div'),
    img: document.createElement('img'),
    nomeRepos: document.createElement('h2'),
    dataRepos: document.createElement('p'),
    starRepos: document.createElement('span'),
  };
  return elementos;
};

var GerarRepo = (elementos, dados) => {
  let repos = elementos;

  repos.divRepos.classList.add('repositorio');
  repos.divInfo2.classList.add('stars');

  repos.img.src = './assets/star.svg';
  repos.img.alt = 'estrela';
  repos.img.classList.add('estrela');

  repos.nomeRepos.textContent = dados.name;
  repos.dataRepos.textContent = new Date(dados.created_at)
    .toISOString()
    .slice(0, 10);

  repos.starRepos.textContent = dados.stargazers_count;

  repos.divInfo1.appendChild(repos.nomeRepos);
  repos.divInfo1.appendChild(repos.dataRepos);

  repos.divInfo2.appendChild(repos.img);
  repos.divInfo2.appendChild(repos.starRepos);

  repos.divRepos.appendChild(repos.divInfo1);
  repos.divRepos.appendChild(repos.divInfo2);

  return repos;
};
