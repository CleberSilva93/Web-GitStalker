const carregarUsers = function () {
  var user = GerarUser(gerarElementos());
  document.querySelector("#users").appendChild(user.divuser);
}

var gerarElementos = () => {
  var elementos = {
    divuser: document.createElement("div"),
    img: document.createElement("img"),
    divuserinfo: document.createElement("div"),
    nome: document.createElement("h2"),
    loc: document.createElement("p"),
    seguidores: document.createElement("p"),
    link: document.createElement("a"),
    svg: document.createElementNS("http://www.w3.org/2000/svg", "svg"),
    path: document.createElementNS("http://www.w3.org/2000/svg", "path")
  }
  return elementos;
}

var GerarUser = (elementos) => {

  var user = elementos;

  console.log(user);

  user.divuserinfo.classList.add("userinfo");
  user.divuser.classList.add("user");

  user.link.setAttribute("href", "google.com.br");
  user.path.setAttributeNS(null,"d","M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z");
  user.svg.setAttribute("width", "24");
  user.svg.setAttribute("height", "24");
  user.svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  user.svg.setAttribute("viewBox", "0 0 24 24");

  user.img.src = "https://avatars2.githubusercontent.com/u/5284292?s=400&u=55a986baea9aab7d8f176691fddaebe3cda8a2d9&v=4";
  user.nome.textContent = "Estou testando";
  user.loc.textContent = `Location: Piracicaba`;
  user.seguidores.textContent = "Seguidores: 123";

  user.svg.appendChild(user.path);
  user.link.appendChild(user.divuser);
  user.divuser.appendChild(user.img);
  user.divuser.appendChild(user.divuserinfo);
  user.divuserinfo.appendChild(user.nome);
  user.divuserinfo.appendChild(user.loc);
  user.divuserinfo.appendChild(user.seguidores);
  user.divuserinfo.appendChild(user.svg);

  return user;
}
