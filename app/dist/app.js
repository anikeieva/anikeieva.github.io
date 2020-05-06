'use strict';

function readyGalery() {
  var galleryBtnRight = document.getElementsByClassName('gallery-section__angle-button-right')[0];
  var galleryBtnLeft = document.getElementsByClassName('gallery-section__angle-button-left')[0];
  var gallerySslide = document.getElementsByClassName('gallery-section__item')[0];

  var gallerySslidesArray = ['img/gallery/it-shkolyar/1.jpg', 'img/gallery/it-shkolyar/2.jpg', 'img/gallery/it-shkolyar/3.jpg', 'img/gallery/it-shkolyar/4.jpg', 'img/gallery/it-shkolyar/5.jpg', 'img/gallery/it-shkolyar/6.jpg', 'img/gallery/it-shkolyar/7.jpg', 'img/gallery/it-shkolyar/8.jpg', 'img/gallery/it-shkolyar/9.jpg', 'img/gallery/it-shkolyar/10.jpg'];

  if (document.getElementsByClassName('ua-page')[0]) {

    var newArray = [];

    gallerySslidesArray.map(function (item) {
      var itemSend = item.slice(0),
          newSymb = '../',
          result = newSymb + itemSend;

      newArray.push(result);
    });

    gallerySslidesArray = newArray;
  }

  var counter = 0;

  function changingSlideRight() {
    if (counter >= gallerySslidesArray.length - 1) {
      counter = -1;
    }
    ++counter;

    gallerySslidesArray.filter(function (item, index) {
      if (index === counter) {
        gallerySslide.style.backgroundImage = 'url(' + item + ')';
      }
    });
  }

  function changingSlideLeft() {
    if (counter === 0) {
      counter = gallerySslidesArray.length;
    }
    --counter;

    gallerySslidesArray.filter(function (item, index) {
      if (index === counter) {
        gallerySslide.style.backgroundImage = 'url(' + item + ')';
      }
    });
  }

  galleryBtnRight.addEventListener('click', changingSlideRight);
  galleryBtnLeft.addEventListener('click', changingSlideLeft);
}

document.addEventListener("DOMContentLoaded", readyGalery);
'use strict';

function readyPortfolio() {
  var portfolioSlide = document.getElementsByClassName('portfolio__item');
  var portfolioHoverText = document.getElementsByClassName('portfolio-section__hover-text');
  var portfolioSection = document.getElementsByClassName('portfolio-section')[0];

  function hoverPortfolioSlide(index) {

    var hoverEachPortfolioSlide = function hoverEachPortfolioSlide() {
      portfolioHoverText[index].classList.toggle('visible');
      portfolioSection.classList.toggle('portfolio-section_hover');
    };

    return hoverEachPortfolioSlide;
  }

  for (var i = 0; i < portfolioSlide.length; i++) {
    portfolioSlide[i].addEventListener('mouseover', hoverPortfolioSlide(i));
    portfolioSlide[i].addEventListener('mouseout', hoverPortfolioSlide(i));
  }
}

document.addEventListener("DOMContentLoaded", readyPortfolio);
'use strict';

function readySideBar() {
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

document.addEventListener("DOMContentLoaded", readySideBar);