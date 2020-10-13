var botaoBuscar = document.querySelector("#buscarUsers");
botaoBuscar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.github.com/search/users?q=location:piracicaba&per_page=100&page=1&sort=login`);
    xhr.addEventListener("load", function() {
      if (xhr.status == 200) {
        response = xhr.responseText;
        var users = JSON.parse(response);
          users.items.forEach(function(user) {
          carregarUsers(user);
        })
      }else {
        console.log(xhr.status);
        console.log(xhr.responseText);
      }
    })
    xhr.send();
})
