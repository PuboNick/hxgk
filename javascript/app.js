var navBtn = document.getElementById('navBtn');
var navbar = document.getElementById('navbar');

navBtn.addEventListener('click', function() {
  navbar.style.display !== 'block' ? navbar.style.display = 'block' : navbar.style.display = 'none';
});