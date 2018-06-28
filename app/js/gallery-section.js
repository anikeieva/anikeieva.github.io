function readyGalery() {
  let galleryBtnRight = document.getElementsByClassName('gallery-section__angle-button-right')[0];
  let galleryBtnLeft = document.getElementsByClassName('gallery-section__angle-button-left')[0];
  let gallerySslide = document.getElementsByClassName('gallery-section__item')[0];

  let gallerySslidesArray = [
    'img/gallery/it-shkolyar/1.jpg',
    'img/gallery/it-shkolyar/2.jpg',
    'img/gallery/it-shkolyar/3.jpg',
    'img/gallery/it-shkolyar/4.jpg',
    'img/gallery/it-shkolyar/5.jpg',
    'img/gallery/it-shkolyar/6.jpg',
    'img/gallery/it-shkolyar/7.jpg',
    'img/gallery/it-shkolyar/8.jpg',
    'img/gallery/it-shkolyar/9.jpg',
    'img/gallery/it-shkolyar/10.jpg'
  ];

  if(document.getElementsByClassName('ua-page')[0]) {

    let newArray = [];

    gallerySslidesArray.map( (item) => {
      let itemSend = item.slice(0),
          newSymb = '../',
          result = newSymb + itemSend;

      newArray.push(result);
    });

    gallerySslidesArray = newArray;
  }

  let counter = 0;

  function changingSlideRight() {
    if(counter >= gallerySslidesArray.length - 1) {
      counter = -1;
    }
    ++counter;

    gallerySslidesArray.filter( (item, index) => {
      if(index === counter) {
        gallerySslide.style.backgroundImage = `url(${item})`;
      }
    });
  }

  function changingSlideLeft() {
    if(counter === 0) {
      counter = gallerySslidesArray.length;
    }
    --counter;

    gallerySslidesArray.filter( (item, index) => {
      if(index === counter) {
        gallerySslide.style.backgroundImage = `url(${item})`;
      }
    });
  }

  galleryBtnRight.addEventListener('click', changingSlideRight);
  galleryBtnLeft.addEventListener('click', changingSlideLeft)

}

document.addEventListener("DOMContentLoaded", readyGalery);
