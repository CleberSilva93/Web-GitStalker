let currentpage = 0;
var pages;
let userRepo;
const openRepos = (dados) => {
  userRepo = dados;
  pages = Math.round(userRepo.public_repos / 5);
  currentpage++;
  let repos = `${userRepo.repos_url}?page=${currentpage}&per_page=5`;
  repositories.innerText = '';

  apiRepos(repos).then((repos) => {
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
