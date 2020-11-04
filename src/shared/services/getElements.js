var body = document.querySelector('body');
var divloading = document.getElementById('divloading');
var modal = document.getElementById('modal');
var campoFiltro = document.querySelector('#filtrar-users');
var radios = document.getElementsByName('ordenar');
var wrapperdws = document.getElementById('dws');
var user = document.getElementById('user');
var org = document.getElementById('org');

var type = document.getElementById('badge');
var photo = document.getElementById('photo');
var following = document.getElementById('following');
var followers = document.getElementById('followers');
var repos = document.getElementById('repos');
var nameUser = document.getElementById('name');
var bio = document.getElementById('bio');
var city = document.getElementById('city');
var email = document.getElementById('email');
var createddata = document.getElementById('createddata');
var lastupdated = document.getElementById('lastupdated');
var divemail = document.getElementById('divemail');

var main = document.getElementsByTagName('main');
var divusers = document.getElementById('users');

var repositories = document.getElementById('repositoriosmodal');

var spinnerText = document.getElementById('spinner-text');
var spinner = document.getElementById('spinner');

var qtd = 0;
var usersData = [];
var token = '76b54959748e921c86ddace498c9fa0272e7c82a';
var loading;

var currentpage = 0;
var pages;
var userRepo;

var OpenModal;
var FecharModal;
var loaderOrdemLoading;
