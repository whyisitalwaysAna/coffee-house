'use strict'

window.addEventListener('DOMContentLoaded', function() {

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
    line.addEventListener('click', () => {
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

setInterval(scrollNext, 5000);

    

});


function createCard() {
    const cardWrapper = document.querySelector('.menu_grid');

    async function fetchData() {
        try {
          const response = await fetch('products.json');
          
          if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
          }
      
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Произошла ошибка:', error.message);
        }
      }
      
      async function displayData() {
        const data = await fetchData();
        
        if (data) {
          console.log('Данные из JSON файла:', data);
          data.products.forEach(product => {
            console.log('Название продукта:', product.name);
            console.log('Цена продукта:', product.price);
          });
        }
      }
      displayData();

    return cardWrapper.innerHTML = `
    <div class="menu_card">
    <div class="card_photo-1"></div>
    <div class="card_content">
        <div class="card_title">Irish coffee</div>
        <div class="card_descr">Fragrant black coffee with Jameson Irish whiskey and whipped milk
        </div>
        <div class="card_price">$7.00</div>
    </div>
    </div>`
};

createCard();


