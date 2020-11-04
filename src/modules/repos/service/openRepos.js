import { GerarRepos } from './gerarRepos.js';
import { apiRepos } from './apiRepos.js';

export const openRepos = (dados) => {
  userRepo = dados;
  pages = Math.round(userRepo.public_repos / 5);
  currentpage++;
  let repos = `${userRepo.repos_url}?sort=created&direction=desc&page=${currentpage}&per_page=5`;
  repositories.innerText = '';

  apiRepos(repos).then((repos) => {
    repos.forEach((repository) => {
      GerarRepos(repository);
    });
  });
};
