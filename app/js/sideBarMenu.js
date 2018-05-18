function ready() {
  var menu_toggleBtn = document.getElementsByClassName('menu-container__toggle-btn')[0];
  var menu_icon = document.getElementsByClassName('menu-container__icon')[0];
  var menu_sideBar = document.getElementsByClassName('menu-container__side-bar')[0];
  var mainContainer = document.getElementsByClassName('main-container')[0];
  var header_lineSide = document.getElementsByClassName('header__line-side')[0];

  function activeMenu() {

    menu_sideBar.classList.toggle('active');
    menu_icon.classList.toggle('fa-bars');
    menu_icon.classList.toggle('fa-times');
    // header_lineSide.classList.toggle('header__line-side_left');
    // mainContainer.classList.toggle('main-container_left');

  }

  menu_toggleBtn.addEventListener('click', activeMenu);

  var menu = document.getElementsByClassName('menu')[0];

  function choose_point() {
    menu_sideBar.classList.toggle('active');
    menu_icon.classList.toggle('fa-bars');
    menu_icon.classList.toggle('fa-times');
    // header_lineSide.classList.toggle('header__line-side_left');
    // mainContainer.classList.toggle('main-container_left');

  }

  menu.addEventListener('click', choose_point);
}

document.addEventListener("DOMContentLoaded", ready);
