var modal = document.getElementById('modal');
const detalhada = (dados) => {
  console.log('Estamos testando');
  console.log(dados);
  modal.style.opacity = '1';
  modal.style.display = 'flex';
  document.querySelector('body').style.overflow = 'hidden';

  let user = JSON.parse(localStorage.getItem(dados));
};

const fecharmodal = () => {
  document.querySelector('.modal').style.display = 'none';
  document.querySelector('body').style.overflow = 'visible';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    document.querySelector('body').style.overflow = 'visible';
  }
};
