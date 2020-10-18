var main = document.getElementsByTagName('main');

const reset = () => {
  // qtd = 6;
  document.getElementById('users').remove();
  let div = document.createElement('div');
  div.setAttribute('id', 'users');
  document.querySelector('#main').appendChild(div);
};
