'use strict'

window.addEventListener('DOMContentLoaded', function() {


//hamburger
let buttonHamburger = document.querySelector('.hamburger-wrapper');
let modalHamburger = document.getElementById('nav-hamburger');
let body = document.querySelector('body');
let bodyActive = document.querySelector('.body-wrapper');
let liHamburger = document.querySelectorAll('.li-hamburger');
let spanHamburgerOne = document.querySelector('.span-1');
let spanHamburgerTwo = document.querySelector('.span-2');

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

})
    

});


