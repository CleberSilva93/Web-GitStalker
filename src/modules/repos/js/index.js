var repositories = document.getElementById('repositoriosmodal');

// window.scrollTo(0, 0);
//   document.getElementById('users').remove();
//   let div = document.createElement('div');
//   div.setAttribute('id', 'users');
//   document.querySelector('#main').appendChild(div);
let currentpage = 0;
var pages;
let userRepo;
const openRepos = (dados) => {
  userRepo = dados;

  pages = Math.round(userRepo.public_repos / 5);

  currentpage++;
  let repos = `${userRepo.repos_url}?page=${currentpage}&per_page=5`;
  console.log(repos);
  repositories.innerText = '';

  apiRepos(repos).then((repos) => {
    console.log(repos);
    repos.forEach((repository) => {
      GerarRepos(repository);
    });
  });
};

repositories.addEventListener('scroll', () => {
  loader(true);
  let scrollPos =
    parseInt(repositories.scrollTop + repositories.clientHeight) +
      1 >=
    repositories.scrollHeight;
  if (scrollPos === true && currentpage <= pages) {
    loader(true);
    currentpage++;
    apiRepos(
      `${userRepo.repos_url}?page=${currentpage}&per_page=5`,
    ).then((repos) => {
      if (!!repos) {
        repos.forEach((repository) => {
          GerarRepos(repository);
        });
      }
    });
    loader(false);
  }
  loader(false);
});
