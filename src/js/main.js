'use strict'

window.addEventListener('DOMContentLoaded', function() {

//SCROLL
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );

    let scrollSum = scrollHeight / 2;

    let scrollUp = document.querySelector('.up');

    function visibleScroll() {
        if (scrollPosition >= scrollSum) {
            scrollUp.classList.add('up-active');
        } else {
            scrollUp.classList.remove('up-active');
        }
    }
    visibleScroll();
  });
  

//BURGER
let buttonHamburger = document.querySelector('.hamburger-wrapper'),
    modalHamburger = document.getElementById('nav-hamburger'),
    body = document.querySelector('body'),
    bodyActive = document.querySelector('.body-wrapper'),
    liHamburger = document.querySelectorAll('.li-hamburger'),
    spanHamburgerOne = document.querySelector('.span-1'),
    spanHamburgerTwo = document.querySelector('.span-2');

buttonHamburger.addEventListener('click', function(event) {

    modalHamburger.classList.toggle('nav-visible');
    spanHamburgerOne.classList.toggle('span-1-open');
    spanHamburgerTwo.classList.toggle('span-2-open');
    body.classList.toggle('overflow');
    bodyActive.classList.toggle('body-wrapper-active');

    liHamburger.forEach(elem => {
        elem.addEventListener('click', function() {
            spanHamburgerOne.classList.remove('span-1-open');
            spanHamburgerTwo.classList.remove('span-2-open');
            body.classList.remove('overflow');
            bodyActive.classList.remove('body-wrapper-active')
            modalHamburger.classList.remove('nav-visible');
        });
    });

});

//SLIDER
const slideLine = document.querySelector('.slide_line'),
      controlLine = document.querySelectorAll('.control-line');

const slideProp = document.querySelector('.slide'),
      slideStyle = window.getComputedStyle(slideProp),
      slideWidth = parseInt(slideStyle.width);


let sliderOffset = 0,
    controlOffset = 0;

function scrollNext() {
    if (sliderOffset < (slideWidth * 2)) {
        sliderOffset += slideWidth;
        controlOffset++
    } else {
        sliderOffset = 0;
        controlOffset = 0;
    }

    slideLine.style.left = -sliderOffset + 'px';
    slideControls(controlOffset);
};

document.querySelector('.arrow_right').addEventListener('click', scrollNext);

function scrollPrev() {
    if (sliderOffset == 0) {
        sliderOffset = slideWidth * 2;
        controlOffset = 2;
    } else {
        sliderOffset -= slideWidth;
        controlOffset--
    }

    slideLine.style.left = -sliderOffset + 'px';
    slideControls(controlOffset);
};

document.querySelector('.arrow_left').addEventListener('click', scrollPrev);

    //slider controls

controlLine.forEach((line, index) => {
    line.addEventListener('click', (event) => {
        event.preventDefault();
        sliderOffset = slideWidth * index
        slideLine.style.left = -sliderOffset + 'px';
        controlOffset = index;
        slideControls(controlOffset);
    })
});

function slideControls(index) {
    for (let line of controlLine) {
        line.classList.remove('active');
    }

    controlLine[index].classList.add('active');
};

    //interval

    setInterval(scrollNext, 5000)


});


