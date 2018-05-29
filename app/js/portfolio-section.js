function ready() {
  let portfolioSlide = document.getElementsByClassName('portfolio__item')[0];
  let portfolioHoverText = document.getElementsByClassName('portfolio-section__hover-text')[0];
  let portfolioSection = document.getElementsByClassName('portfolio-section')[0];

  function hoverPortfolioSlide() {

    portfolioHoverText.classList.toggle('visible');

    let portfolioHoverTextWidth = portfolioHoverText.offsetWidth;
    let portfolioHoverTextHeight = portfolioHoverText.offsetHeight;

    portfolioSection.classList.toggle('portfolio-section_hover');
    portfolioHoverText.style.left = `calc(50% - ${portfolioHoverTextWidth/2}px)`;
    portfolioHoverText.style.top = `calc(50% - ${portfolioHoverTextHeight/2}px)`;
  }

  portfolioSlide.addEventListener('mouseover', hoverPortfolioSlide);
  portfolioSlide.addEventListener('mouseout', hoverPortfolioSlide);
}

document.addEventListener("DOMContentLoaded", ready);
