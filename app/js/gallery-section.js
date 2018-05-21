function ready() {
  let galleryBtnRight = document.getElementsByClassName('gallery-section__angle-button-right')[0];
  let galleryBtnLeft = document.getElementsByClassName('gallery-section__angle-button-left')[0];
  let gallerySslide = document.getElementsByClassName('gallery-section__item')[0];
  const gallerySslidesArray = [
    'img/gallery/it-школяр/30171219_169344820445798_4335574628847642808_o.jpg',
    'img/gallery/it-школяр/29983054_169344823779131_2652349194549814631_o.jpg',
    'img/gallery/it-школяр/29983211_169345093779104_855175623059303314_o.jpg',
    'img/gallery/it-школяр/29983262_169344933779120_3610492867027237624_o.jpg',
    'img/gallery/it-школяр/29983363_169345110445769_6292697743476448005_o.jpg',
    'img/gallery/it-школяр/29983413_169344963779117_7462035664258350859_o.jpg',
    'img/gallery/it-школяр/30072747_169344957112451_2575314177981744514_o.jpg',
    'img/gallery/it-школяр/30167999_169344943779119_8144949423898715383_o.jpg',
    'img/gallery/it-школяр/30168003_169344810445799_4238244016094024780_o.jpg',
    'img/gallery/it-школяр/30168014_169345100445770_7985281765583073547_o.jpg',
    'img/gallery/it-школяр/30171979_169345083779105_197143806832624855_o.jpg',
    'img/gallery/it-школяр/30425750_169344803779133_7107726855062376792_o.jpg'
  ];
  let counter = 0;

  function changingSlideRight() {
    if(counter >= gallerySslidesArray.length - 1) {
      counter = -1;
    }
    ++counter;
    // console.log(counter);

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
    // console.log(counter);

    gallerySslidesArray.filter( (item, index) => {
      if(index === counter) {
        gallerySslide.style.backgroundImage = `url(${item})`;
      }
    });
  }

  galleryBtnRight.addEventListener('click', changingSlideRight);
  galleryBtnLeft.addEventListener('click', changingSlideLeft)

}

document.addEventListener("DOMContentLoaded", ready);
