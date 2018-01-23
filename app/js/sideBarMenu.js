function activeMenu() {
  var sideBar = document.getElementById('sideBar');
  var toggleBtn = document.getElementsByClassName('toggle-btn');

  sideBar.classList.toggle('active');
}

addEventListener('click', activeMenu);
