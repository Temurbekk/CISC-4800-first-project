let slides = document.querySelector('.slider-items').children;
let nextSlide = document.querySelector('.right-slider');
let prevSlide = document.querySelector('.left-slider');

let totalSlides = slides.length;

let index = 0;

nextSlide.onclick = () => {
  next('next');
};
prevSlide.onclick = () => {
  next('prev');
};

let next = direction => {
  if (direction == 'next') {
    index++;
    if (index == totalSlides) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalSlides - 1;
    } else {
      index--;
    }
  }
  for (i = 0; i < slides.length; i++) slides[i].classList.remove('active');

  slides[index].classList.add('active');
};

// window.onscroll = () => {
//   myFunction();
// };

// var header = document.getElementById('myHeader');

// var sticky = header.offsetTop;

// let myFunction = () => {
//   if (window.pageYOffset > sticky) {
//     header.classList.add('sticky');
//   } else {
//     header.classList.remove('sticky');
//   }
// };
