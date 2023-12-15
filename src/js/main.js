'use strict'

window.addEventListener('DOMContentLoaded', function() {


//hamburger
let buttonHamburger = document.querySelector('.hamburger-wrapper');
let modalHamburger = document.getElementById('nav-hamburger');
let body = document.querySelector('body');
let liHamburger = document.querySelectorAll('.li-hamburger');
let spanHamburgerOne = document.querySelector('.span-1');
let spanHamburgerTwo = document.querySelector('.span-2');


buttonHamburger.addEventListener('click', function(event) {

    modalHamburger.classList.toggle('nav-visible');
    spanHamburgerOne.classList.toggle('span-1-open');
    spanHamburgerTwo.classList.toggle('span-2-open');
    body.classList.toggle('overflow');

    liHamburger.forEach(elem => {
        elem.addEventListener('click', function() {
            body.classList.remove('overflow');
            modalHamburger.classList.remove('nav-visible');
        });
    });

})
    

});


