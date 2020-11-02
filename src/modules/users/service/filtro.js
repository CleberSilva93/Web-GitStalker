import { reset } from '../../../shared/services/reset.js';
import { GerarUsers } from './GerarUsers.js';
import { newRequest } from './newRequest.js';
import { request } from './request.js';
import { searchUserApi } from './searchUser.js';

export const filtro = async (input) => {
  searchUserApi(
    `https://api.github.com/search/users?q=${input.value}+location:piracicaba`,
  ).then((data) => {
    console.log('Esta aqui');
    reset();
    data.items.forEach((user) => {
      request(user).then((data) => {
        console.log(data);
        GerarUsers(data);
      });
    });
  });

  // reset();
  // let filtrando = async (tipo, i) => {
  //   let user = await (async () => {
  //     return await request(usersData[i]);
  //   })();
  //   let expressao = new RegExp(input.value, 'i'); // o i é para definir se é insensitive ou case-sensitive
  //   if (
  //     (expressao.test(user.name) ||
  //       expressao.test(user.type) ||
  //       expressao.test(user.login)) &&
  //     (tipo == '' ? true : user.type == tipo)
  //   ) {
  //     GerarUsers(user);
  //   }
  // };
  // if (input.value.length > 0) {
  //   for (let i = 0; i < usersData.length; i++) {
  //     if (
  //       (user.checked == true && org.checked == true) ||
  //       (user.checked == false && org.checked == false)
  //     ) {
  //       console.log('Entrou');
  //       filtrando('', i);
  //     } else if (user.checked == true) {
  //       filtrando('User', i);
  //     } else if (org.checked == true) {
  //       filtrando('Organization', i);
  //     }
  //   }
  // }
};
