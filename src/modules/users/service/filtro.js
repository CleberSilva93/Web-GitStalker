import { reset } from '../../../shared/services/reset.js';
import { GerarUsers } from './GerarUsers.js';
import { newRequest } from './newRequest.js';
import { request } from './request.js';
import { searchUserApi } from './searchUser.js';
import { loader } from '../../../shared/services/loaders.js';

export const filtro = async (input) => {
  loader(true);
  let type;
  if (
    (user.checked == true && org.checked == true) ||
    (user.checked == false && org.checked == false)
  ) {
    type = '';
  } else if (user.checked == true) {
    type = 'type:User';
  } else if (org.checked == true) {
    type = 'type:Organization';
  }
  searchUserApi(
    `https://api.github.com/search/users?q=${input.value}+location:piracicaba+${type}`,
  ).then((data) => {
    reset();
    data.items.forEach(async (user) => {
      await request(user).then((data) => {
        GerarUsers(data);
      });
    });
    loader(false);
    campoFiltro.focus();
  });
};
