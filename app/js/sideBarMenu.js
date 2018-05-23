function ready() {
  var menu_toggleBtn = document.getElementsByClassName('menu-container__toggle-btn')[0];
  var menu_icon = document.getElementsByClassName('menu-container__icon')[0];
  var menu_sideBar = document.getElementsByClassName('menu-container__side-bar')[0];
  var faBars = document.getElementsByClassName('fa-bars')[0];

  function activeMenu() {

    menu_sideBar.classList.toggle('active');
    menu_icon.classList.toggle('fa-bars');
    menu_icon.classList.toggle('fa-times');
    faBars.classList.toggle('no-active-bars');

  }

  menu_toggleBtn.addEventListener('click', activeMenu);

  var menu = document.getElementsByClassName('menu')[0];

  function choose_point() {
    menu_sideBar.classList.toggle('active');
    menu_icon.classList.toggle('fa-bars');
    menu_icon.classList.toggle('fa-times');
    faBars.classList.toggle('no-active-bars');

  }

  menu.addEventListener('click', choose_point);
}

document.addEventListener("DOMContentLoaded", ready);
