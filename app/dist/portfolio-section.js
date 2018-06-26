'use strict';

function ready() {
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

document.addEventListener("DOMContentLoaded", ready);