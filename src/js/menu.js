'use strict'

//MENU
window.addEventListener('DOMContentLoaded', function() {
    function createCard() {
        const coffeeWrapper = document.querySelector('.coffee_grid'),
        teaWrapper = document.querySelector('.tea_grid'),
        dessertWrapper = document.querySelector('.dessert_grid');
    
        const navigationCoffee = document.querySelector('.coffee'),
        navigationTea = document.querySelector('.tea'),
        navigationDessert = document.querySelector('.dessert');
        
    
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
          
          //COFFEE MENU
          async function displayDataCoffee() {
            const data = await fetchData();
    
              data.forEach(product => {
    
                navigationCoffee.addEventListener('click', () => {
                    navigationTea.classList.remove('active');
                    navigationDessert.classList.remove('active');
                    teaWrapper.classList.remove('active');
                    dessertWrapper.classList.remove('active');
        
                    navigationCoffee.classList.add('active');
                    coffeeWrapper.classList.add('active');
                })
    
                if (coffeeWrapper.classList.contains('active') && product.category === "coffee") {
    
                    const cardElement = document.createElement('div');
                    cardElement.classList.add('card-element');
    
                    cardElement.innerHTML = `
                    <div class="menu_card">
                    <img class="card_photo" src="${product.photo}" alt="product_coffee">
                    <div class="card_content">
                        <div class="card_title">${product.name}</div>
                        <div class="card_descr">${product.description}</div>
                        <div class="card_price">${product.price}</div>
                    </div>
                    </div>
                    `
                    coffeeWrapper.appendChild(cardElement)

                    const refreshIcon = document.querySelector('.refresh')

                    refreshIcon.addEventListener('click', () => {
                        cardElement.classList.toggle('card-element-active');
                    })
                }
                
              });
          }
          displayDataCoffee();
    
    
          //TEA MENU
          async function displayDataTea() {
            const data = await fetchData();
    
            data.forEach(product => {
    
                navigationTea.addEventListener('click', () => {
                    navigationCoffee.classList.remove('active');
                    navigationDessert.classList.remove('active');
                    coffeeWrapper.classList.remove('active');
                    dessertWrapper.classList.remove('active');
        
                    navigationTea.classList.add('active');
                    teaWrapper.classList.add('active');
                })
    
                if (product.category === "tea") {
        
                    const cardElement = document.createElement('div');
    
                    cardElement.innerHTML = `
                    <div class="menu_card">
                    <img class="card_photo" src="${product.photo}" alt="product_coffee">
                    <div class="card_content">
                        <div class="card_title">${product.name}</div>
                        <div class="card_descr">${product.description}</div>
                        <div class="card_price">${product.price}</div>
                    </div>
                    </div>
                    `
                    teaWrapper.appendChild(cardElement)
                }
        
            });
          }
          displayDataTea();
    
          //DESSERT MENU
          async function displayDataDessert() {
            const data = await fetchData();
    
            data.forEach(product => {
    
                navigationDessert.addEventListener('click', () => {
                    navigationCoffee.classList.remove('active');
                    navigationTea.classList.remove('active');
                    coffeeWrapper.classList.remove('active');
                    teaWrapper.classList.remove('active');
        
                    navigationDessert.classList.add('active');
                    dessertWrapper.classList.add('active');
                })
    
                if (product.category === "dessert") {
        
                    const cardElement = document.createElement('div');
                    cardElement.classList.add('card-element');
    
                    cardElement.innerHTML = `
                    <div class="menu_card">
                    <img class="card_photo" src="${product.photo}" alt="product_coffee">
                    <div class="card_content">
                        <div class="card_title">${product.name}</div>
                        <div class="card_descr">${product.description}</div>
                        <div class="card_price">${product.price}</div>
                    </div>
                    </div>
                    `
                    dessertWrapper.appendChild(cardElement)

                    const refreshIcon = document.querySelector('.refresh')

                    refreshIcon.addEventListener('click', () => {
                        cardElement.classList.toggle('card-element-active');
                    })
                }
        
            });
          }
          displayDataDessert();
    };
    
    createCard();

});



