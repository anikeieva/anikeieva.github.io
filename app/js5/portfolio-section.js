'use strict';

function ready() {
  var portfolioSlide = document.getElementsByClassName('portfolio__item')[0];
  var portfolioHoverText = document.getElementsByClassName('portfolio-section__hover-text')[0];
  var portfolioSection = document.getElementsByClassName('portfolio-section')[0];

  function hoverPortfolioSlide() {

    portfolioHoverText.classList.toggle('visible');

    var portfolioHoverTextWidth = portfolioHoverText.offsetWidth;
    var portfolioHoverTextHeight = portfolioHoverText.offsetHeight;

    portfolioSection.classList.toggle('portfolio-section_hover');
    portfolioHoverText.style.left = 'calc(50% - ' + portfolioHoverTextWidth / 2 + 'px)';
    portfolioHoverText.style.top = 'calc(50% - ' + portfolioHoverTextHeight / 2 + 'px)';
  }

  portfolioSlide.addEventListener('mouseover', hoverPortfolioSlide);
  portfolioSlide.addEventListener('mouseout', hoverPortfolioSlide);
}

document.addEventListener("DOMContentLoaded", ready);