var campoFiltro = document.querySelector("#filtrar-users");


campoFiltro.addEventListener("input", function(){
  var users = document.querySelectorAll(".user");
  if (this.value.length > 0) {
    for (var i = 0; i < users.length; i++){
      var user = users[i];
      var h2nome = user.querySelector("h2");
      var nome = h2nome.textContent;
      var expressao = new RegExp(this.value, "i"); // o i é para definir se é insensitive ou case-sensitive
      if(!expressao.test(nome)){
        user.classList.add("invisible");
      } else {
        user.classList.remove("invisible");
      }
    }
  }else {
    for (let i = 0; i < users.length; i++) {
      var user = users[i];
      user.classList.remove("invisible");
    }
  }


})
