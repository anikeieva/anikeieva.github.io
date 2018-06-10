function ready() {
  let portfolioSlide = document.getElementsByClassName('portfolio__item')[0];
  let portfolioHoverText = document.getElementsByClassName('portfolio-section__hover-text')[0];
  let portfolioSection = document.getElementsByClassName('portfolio-section')[0];

  function hoverPortfolioSlide() {

    portfolioHoverText.classList.toggle('visible');

    portfolioSection.classList.toggle('portfolio-section_hover');

  }

  portfolioSlide.addEventListener('mouseover', hoverPortfolioSlide);
  portfolioSlide.addEventListener('mouseout', hoverPortfolioSlide);
}

document.addEventListener("DOMContentLoaded", ready);
