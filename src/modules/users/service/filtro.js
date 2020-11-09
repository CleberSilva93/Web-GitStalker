import { reset } from '../../../shared/services/reset.js';
import { GerarUsers } from './GerarUsers.js';
import { request } from './request.js';
import { searchUserApi } from './searchUser.js';
import { loader } from '../../../shared/services/loaders.js';
import { ShowToast } from '../../../shared/services/toast.js';

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
    if (data.items.length > 0) {
      data.items.forEach(async (user) => {
        await request(user).then((data) => {
          GerarUsers(data);
        });
      });
    } else {
      ShowToast('Não foi encontrado!', 'notification');
    }
    loader(false);
    campoFiltro.focus();
  });
};
