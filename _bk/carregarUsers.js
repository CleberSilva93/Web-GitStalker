var gerarElementos = () => {
  var elementos = {
    divuser: document.createElement('div'),
    img: document.createElement('img'),
    divuserinfo: document.createElement('div'),
    divusergeral: document.createElement('div'),
    divuserinfoleft: document.createElement('div'),
    divuserinforight: document.createElement('div'),
    nome: document.createElement('h3'),
    loc: document.createElement('p'),
    seguidores: document.createElement('p'),
    datacreate: document.createElement('p'),
    numrepos: document.createElement('p'),
    tipo: document.createElement('p'),
    link: document.createElement('a'),
    svg: document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg',
    ),
    path: document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path',
    ),
  };
  return elementos;
};

var GerarUser = (elementos, dados) => {
  var user = elementos;
  // let userdiv = `
  // <div class="user"onclick="detalhada(${dados.login})">
  //   <img src="${dados.avatar_url}">
  //   <div class="userinfo"><div class="userinfogeral">
  //     <h3>${dados.name}</h3>
  //     <div>
  //       <p>Seguidores: ${dados.followers}</p>
  //       <p>Tipo: ${dados.type}</p>
  //       <p>Número de repositórios: ${dados.public_repos}</p>
  //       </div>
  //       <div>
  //         <p>${dados.location}</p>
  //         <p>Cadastro: ${new Date(dados.created_at)
  //           .toISOString()
  //           .slice(0, 10)}</p>
  //       </div>
  //     </div>
  //     <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  //         <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
  //     </svg>
  //   </div>
  // </div>

  // `;
  user.divuserinfo.classList.add('userinfo');
  user.divusergeral.classList.add('userinfogeral');
  user.divuser.classList.add('user');
  user.divuser.setAttribute('id', dados.url);
  user.divuser.setAttribute('onClick', `detalhada("${dados.login}")`);

  user.link.setAttribute('href', dados.url);
  user.path.setAttributeNS(
    null,
    'd',
    'M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z',
  );
  user.svg.setAttribute('width', '24');
  user.svg.setAttribute('height', '24');
  user.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  user.svg.setAttribute('viewBox', '0 0 24 24');

  user.img.src = `${dados.avatar_url}`;
  user.nome.textContent =
    dados.name == null ? dados.login : dados.name;
  user.loc.textContent = dados.location;
  user.seguidores.textContent = `Seguidores: ${dados.followers}`;
  user.tipo.textContent = `Tipo: ${dados.type}`;
  user.numrepos.textContent = `Número de repositórios: ${dados.public_repos}`;
  user.datacreate.textContent = `Cadastro: ${new Date(
    dados.created_at,
  )
    .toISOString()
    .slice(0, 10)}`;

  user.svg.appendChild(user.path);
  user.link.appendChild(user.divuser);
  user.divuser.appendChild(user.img);
  user.divuser.appendChild(user.divuserinfo);
  user.divusergeral.appendChild(user.nome);
  user.divusergeral.appendChild(user.divuserinfoleft);
  user.divusergeral.appendChild(user.divuserinforight);

  user.divuserinforight.appendChild(user.loc);
  user.divuserinfoleft.appendChild(user.seguidores);
  user.divuserinfoleft.appendChild(user.tipo);

  user.divuserinfoleft.appendChild(user.numrepos);
  user.divuserinforight.appendChild(user.datacreate);

  user.divuserinfo.appendChild(user.divusergeral);
  user.divuserinfo.appendChild(user.svg);

  return user;
};

const carregarUsers = function (users) {
  var user = GerarUser(gerarElementos(), users);
  document.querySelector('#users').appendChild(user.div);
};
