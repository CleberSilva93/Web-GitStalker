import { loader } from '../../../shared/services/loaders.js';
import { apiRepos } from './apiRepos.js';
import { GerarRepos } from './gerarRepos.js';

repositories.addEventListener('scroll', () => {
  let scrollPosRepos =
    parseInt(repositories.scrollTop + repositories.clientHeight) +
      1 >=
    repositories.scrollHeight;
  if (scrollPosRepos === true && currentpage <= pages && !loading) {
    loader(true);
    currentpage++;
    apiRepos(
      `${userRepo.repos_url}?sort=created&direction=desc&page=${currentpage}&per_page=5`,
    ).then((repos) => {
      if (!!repos) {
        repos.forEach((repository) => {
          GerarRepos(repository);
        });
        loader(false);
      }
    });
  }
});
