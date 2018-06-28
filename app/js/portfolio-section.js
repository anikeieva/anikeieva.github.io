function readyPortfolio() {
  let portfolioSlide = document.getElementsByClassName('portfolio__item');
  let portfolioHoverText = document.getElementsByClassName('portfolio-section__hover-text');
  let portfolioSection = document.getElementsByClassName('portfolio-section')[0];

  function hoverPortfolioSlide(index) {

    const hoverEachPortfolioSlide = () => {
      portfolioHoverText[index].classList.toggle('visible');
      portfolioSection.classList.toggle('portfolio-section_hover');
    };

    return hoverEachPortfolioSlide;
  }

  for (let i = 0; i < portfolioSlide.length; i++) {
    portfolioSlide[i].addEventListener('mouseover', hoverPortfolioSlide(i));
    portfolioSlide[i].addEventListener('mouseout', hoverPortfolioSlide(i));
  }
}

document.addEventListener("DOMContentLoaded", readyPortfolio);
