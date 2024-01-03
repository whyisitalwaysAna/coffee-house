"use strict";

//MENU
window.addEventListener("DOMContentLoaded", function () {
  //BURGER
  let buttonHamburger = document.querySelector(".hamburger-wrapper"),
    modalHamburger = document.getElementById("nav-hamburger"),
    body = document.querySelector("body"),
    bodyActive = document.querySelector(".body-wrapper"),
    liHamburger = document.querySelectorAll(".li-hamburger"),
    spanHamburgerOne = document.querySelector(".span-1"),
    spanHamburgerTwo = document.querySelector(".span-2");

  buttonHamburger.addEventListener("click", function (event) {
    modalHamburger.classList.toggle("nav-visible");
    spanHamburgerOne.classList.toggle("span-1-open");
    spanHamburgerTwo.classList.toggle("span-2-open");
    body.classList.toggle("overflow");
    bodyActive.classList.toggle("body-wrapper-active");

    liHamburger.forEach((elem) => {
      elem.addEventListener("click", function () {
        spanHamburgerOne.classList.remove("span-1-open");
        spanHamburgerTwo.classList.remove("span-2-open");
        body.classList.remove("overflow");
        bodyActive.classList.remove("body-wrapper-active");
        modalHamburger.classList.remove("nav-visible");
      });
    });
  });

  function createCard() {
    const coffeeWrapper = document.querySelector(".coffee_grid"),
      teaWrapper = document.querySelector(".tea_grid"),
      dessertWrapper = document.querySelector(".dessert_grid");

    const navigationCoffee = document.querySelector(".coffee"),
      navigationTea = document.querySelector(".tea"),
      navigationDessert = document.querySelector(".dessert");

    async function fetchData() {
      try {
        const response = await fetch("products.json");

        if (!response.ok) {
          throw new Error("Ошибка загрузки данных");
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Произошла ошибка:", error.message);
      }
    }

    //COFFEE MENU
    async function displayDataCoffee() {
      const data = await fetchData();

      data.forEach((product) => {
        navigationCoffee.addEventListener("click", (event) => {
          event.preventDefault();
          navigationTea.classList.remove("active");
          navigationDessert.classList.remove("active");
          teaWrapper.classList.remove("active");
          dessertWrapper.classList.remove("active");

          navigationCoffee.classList.add("active");
          coffeeWrapper.classList.add("active");
        });

        if (
          coffeeWrapper.classList.contains("active") &&
          product.category === "coffee"
        ) {
          const cardElement = document.createElement("div");
          cardElement.classList.add("card-element");

          cardElement.innerHTML = `
                    <div data-modal class="menu_card">
                    <img class="card_photo" src="${product.photo}" alt="product_coffee">
                    <div class="card_content">
                        <div class="card_title">${product.name}</div>
                        <div class="card_descr">${product.description}</div>
                        <div class="card_price">${product.price}</div>
                    </div>
                    </div>
                    `;
          coffeeWrapper.appendChild(cardElement);

          const refreshIcon = document.querySelector(".refresh");

          refreshIcon.addEventListener("click", () => {
            cardElement.classList.toggle("card-element-active");
          });

          //MODAL COFFEE
          cardElement.addEventListener("click", () => {
            const bodyWrapper = document.querySelector(".body-wrapper");

            const modalElement = document.createElement("div");
            modalElement.classList.add("modal-js");

            modalElement.innerHTML = `
                        <div class="modal_overflow">
                        <div class="modal_frame">
                            <div class="modal_grid">
                                <div class="modal_col_1">
                                    <img class="modal_img" src="${product.photo}" alt="coffee">
                                </div>
                                <div class="modal_col_2">
                                    <div class="modal_title">
                                        <div class="name">${product.name}</div>
                                        <div class="descr">${product.description}</div>
                                    </div>
                                    <div class="modal_size">
                                        Size
                                        <div class="size_tabs_wrapper">
                                            <div data-size="s" class="modal_size_tab active">
                                                <div class="size">S</div>
                                                <div class="ml">${product.sizes.s.size}</div>
                                            </div>
                                            <div data-size="m" class="modal_size_tab">
                                                <div class="size">M</div>
                                                <div class="ml">${product.sizes.m.size}</div>
                                            </div>
                                            <div data-size="l" class="modal_size_tab">
                                                <div class="size">L</div>
                                                <div class="ml">${product.sizes.l.size}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal_additives">
                                        Additives
                                        <div class="additives_tabs_wrapper">
                                            <div data-additives="${product.additives[0].name}" class="modal_additives_tab">
                                                <div class="num">1</div>
                                                <div class="ingr">${product.additives[0].name}</div>
                                            </div>
                                            <div data-additives="${product.additives[1].name}" class="modal_additives_tab">
                                                <div class="num">2</div>
                                                <div class="ingr">${product.additives[1].name}</div>
                                            </div>
                                            <div data-additives="${product.additives[2].name}" class="modal_additives_tab">
                                                <div class="num">3</div>
                                                <div class="ingr">${product.additives[2].name}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal_total">
                                        <div class="total">Total:</div>
                                        <div class="price">${product.price}</div>
                                    </div>
                                    <div class="modal_alert">
                                        <div class="svg">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_268_12877)">
                                                    <path d="M8 7.66663V11" stroke="#403F3D" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M8 5.00667L8.00667 4.99926" stroke="#403F3D" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path
                                                        d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00004C14.6663 4.31814 11.6816 1.33337 7.99967 1.33337C4.31778 1.33337 1.33301 4.31814 1.33301 8.00004C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z"
                                                        stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_268_12877">
                                                        <rect width="16" height="16" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                
                                        <div class="alert_descr">
                                            The cost is not final. Download our mobile app to see the final price and place your
                                            order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.
                                        </div>
                                    </div>
                                    <div class="modal_close">
                                        Close
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        `;

            bodyWrapper.appendChild(modalElement);

            // MODAL SIZE AND ADDITIVES
            const sizeTab = document.querySelectorAll(".modal_size_tab");
            const additivesTab = document.querySelectorAll(".modal_additives_tab");
            const sumDiv = document.querySelector(".price");
            let totalSum = 0;
            let startPrice = +product.price.slice(1);

            function calcTotalSum(size) {
              let addPrice = +product.sizes[size].addprice;
              const selectedAdditives = document.querySelectorAll(
                ".modal_additives_tab.active"
              );
              selectedAdditives.forEach((additive) => {
                const additiveName = additive.dataset.additives;
                const additivePrice = +product.additives.find(
                  (a) => a.name === additiveName
                ).addprice;
                addPrice += additivePrice;
              });

              totalSum = startPrice + addPrice;

              sumDiv.innerHTML = `
                $${totalSum.toFixed(2)}
                `;
            }

            sizeTab.forEach((element) => {
              element.addEventListener("click", (e) => {
                sizeTab.forEach((item) => {
                  if (item !== element && item.classList.contains("active")) {
                    item.classList.remove("active");
                  }
                });

                element.classList.add("active");

                if (element.classList.contains("active")) {
                  const size = element.dataset.size;
                  calcTotalSum(size);
                }
              });
            });

            additivesTab.forEach((element) => {
              element.addEventListener("click", (e) => {
                element.classList.toggle("active");
                const sizeElement = document.querySelector(
                  ".modal_size_tab.active"
                );
                
                if (sizeElement) {
                  const size = sizeElement.dataset.size;
                  calcTotalSum(size);
                }
              });
            });

            //MODAL CLOSE
            const triggerClose = document.querySelector(".modal_close"),
              modalOverflow = document.querySelector(".modal_overflow");

            triggerClose.addEventListener("click", () => {
              bodyWrapper.removeChild(modalElement);
            });

            modalOverflow.addEventListener("click", (e) => {
              if (e.target === modalOverflow) {
                bodyWrapper.removeChild(modalElement);
              }
            });

            document.addEventListener("keydown", (e) => {
              if (e.code === "Escape") {
                bodyWrapper.removeChild(modalElement);
              }
            });
          });
        }
      });
    }
    displayDataCoffee();

    //TEA MENU
    async function displayDataTea() {
      const data = await fetchData();

      data.forEach((product) => {
        navigationTea.addEventListener("click", (event) => {
          event.preventDefault();
          navigationCoffee.classList.remove("active");
          navigationDessert.classList.remove("active");
          coffeeWrapper.classList.remove("active");
          dessertWrapper.classList.remove("active");

          navigationTea.classList.add("active");
          teaWrapper.classList.add("active");
        });

        if (product.category === "tea") {
          const cardElement = document.createElement("div");

          cardElement.innerHTML = `
                    <div data-modal class="menu_card">
                    <img class="card_photo" src="${product.photo}" alt="product_coffee">
                    <div class="card_content">
                        <div class="card_title">${product.name}</div>
                        <div class="card_descr">${product.description}</div>
                        <div class="card_price">${product.price}</div>
                    </div>
                    </div>
                    `;
          teaWrapper.appendChild(cardElement);

                    //MODAL COFFEE
                    cardElement.addEventListener("click", () => {
                      const bodyWrapper = document.querySelector(".body-wrapper");
          
                      const modalElement = document.createElement("div");
                      modalElement.classList.add("modal-js");
          
                      modalElement.innerHTML = `
                                  <div class="modal_overflow">
                                  <div class="modal_frame">
                                      <div class="modal_grid">
                                          <div class="modal_col_1">
                                              <img class="modal_img" src="${product.photo}" alt="coffee">
                                          </div>
                                          <div class="modal_col_2">
                                              <div class="modal_title">
                                                  <div class="name">${product.name}</div>
                                                  <div class="descr">${product.description}</div>
                                              </div>
                                              <div class="modal_size">
                                                  Size
                                                  <div class="size_tabs_wrapper">
                                                      <div data-size="s" class="modal_size_tab active">
                                                          <div class="size">S</div>
                                                          <div class="ml">${product.sizes.s.size}</div>
                                                      </div>
                                                      <div data-size="m" class="modal_size_tab">
                                                          <div class="size">M</div>
                                                          <div class="ml">${product.sizes.m.size}</div>
                                                      </div>
                                                      <div data-size="l" class="modal_size_tab">
                                                          <div class="size">L</div>
                                                          <div class="ml">${product.sizes.l.size}</div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="modal_additives">
                                                  Additives
                                                  <div class="additives_tabs_wrapper">
                                                      <div data-additives="${product.additives[0].name}" class="modal_additives_tab">
                                                          <div class="num">1</div>
                                                          <div class="ingr">${product.additives[0].name}</div>
                                                      </div>
                                                      <div data-additives="${product.additives[1].name}" class="modal_additives_tab">
                                                          <div class="num">2</div>
                                                          <div class="ingr">${product.additives[1].name}</div>
                                                      </div>
                                                      <div data-additives="${product.additives[2].name}" class="modal_additives_tab">
                                                          <div class="num">3</div>
                                                          <div class="ingr">${product.additives[2].name}</div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="modal_total">
                                                  <div class="total">Total:</div>
                                                  <div class="price">${product.price}</div>
                                              </div>
                                              <div class="modal_alert">
                                                  <div class="svg">
                                                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                          xmlns="http://www.w3.org/2000/svg">
                                                          <g clip-path="url(#clip0_268_12877)">
                                                              <path d="M8 7.66663V11" stroke="#403F3D" stroke-linecap="round"
                                                                  stroke-linejoin="round" />
                                                              <path d="M8 5.00667L8.00667 4.99926" stroke="#403F3D" stroke-linecap="round"
                                                                  stroke-linejoin="round" />
                                                              <path
                                                                  d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00004C14.6663 4.31814 11.6816 1.33337 7.99967 1.33337C4.31778 1.33337 1.33301 4.31814 1.33301 8.00004C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z"
                                                                  stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
                                                          </g>
                                                          <defs>
                                                              <clipPath id="clip0_268_12877">
                                                                  <rect width="16" height="16" fill="white" />
                                                              </clipPath>
                                                          </defs>
                                                      </svg>
                                                  </div>
                          
                                                  <div class="alert_descr">
                                                      The cost is not final. Download our mobile app to see the final price and place your
                                                      order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.
                                                  </div>
                                              </div>
                                              <div class="modal_close">
                                                  Close
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                                  `;
          
                      bodyWrapper.appendChild(modalElement);
          
                      // MODAL SIZE AND ADDITIVES
                      const sizeTab = document.querySelectorAll(".modal_size_tab");
                      const additivesTab = document.querySelectorAll(".modal_additives_tab");
                      const sumDiv = document.querySelector(".price");
                      let totalSum = 0;
                      let startPrice = +product.price.slice(1);
          
                      function calcTotalSum(size) {
                        let addPrice = +product.sizes[size].addprice;
                        const selectedAdditives = document.querySelectorAll(
                          ".modal_additives_tab.active"
                        );
                        selectedAdditives.forEach((additive) => {
                          const additiveName = additive.dataset.additives;
                          const additivePrice = +product.additives.find(
                            (a) => a.name === additiveName
                          ).addprice;
                          addPrice += additivePrice;
                        });
          
                        totalSum = startPrice + addPrice;
          
                        sumDiv.innerHTML = `
                          $${totalSum.toFixed(2)}
                          `;
                      }
          
                      sizeTab.forEach((element) => {
                        element.addEventListener("click", (e) => {
                          sizeTab.forEach((item) => {
                            if (item !== element && item.classList.contains("active")) {
                              item.classList.remove("active");
                            }
                          });
          
                          element.classList.add("active");
          
                          if (element.classList.contains("active")) {
                            const size = element.dataset.size;
                            calcTotalSum(size);
                          }
                        });
                      });
          
                      additivesTab.forEach((element) => {
                        element.addEventListener("click", (e) => {
                          element.classList.toggle("active");
                          const sizeElement = document.querySelector(
                            ".modal_size_tab.active"
                          );
                          
                          if (sizeElement) {
                            const size = sizeElement.dataset.size;
                            calcTotalSum(size);
                          }
                        });
                      });
          
                      //MODAL CLOSE
                      const triggerClose = document.querySelector(".modal_close"),
                        modalOverflow = document.querySelector(".modal_overflow");
          
                      triggerClose.addEventListener("click", () => {
                        bodyWrapper.removeChild(modalElement);
                      });
          
                      modalOverflow.addEventListener("click", (e) => {
                        if (e.target === modalOverflow) {
                          bodyWrapper.removeChild(modalElement);
                        }
                      });
          
                      document.addEventListener("keydown", (e) => {
                        if (e.code === "Escape") {
                          bodyWrapper.removeChild(modalElement);
                        }
                      });
                    });
        }
      });
    }
    displayDataTea();

    //DESSERT MENU
    async function displayDataDessert() {
      const data = await fetchData();

      data.forEach((product) => {
        navigationDessert.addEventListener("click", (event) => {
          event.preventDefault();
          navigationCoffee.classList.remove("active");
          navigationTea.classList.remove("active");
          coffeeWrapper.classList.remove("active");
          teaWrapper.classList.remove("active");

          navigationDessert.classList.add("active");
          dessertWrapper.classList.add("active");
        });

        if (product.category === "dessert") {
          const cardElement = document.createElement("div");
          cardElement.classList.add("card-element");

          cardElement.innerHTML = `
                    <div data-modal class="menu_card">
                    <img class="card_photo" src="${product.photo}" alt="product_coffee">
                    <div class="card_content">
                        <div class="card_title">${product.name}</div>
                        <div class="card_descr">${product.description}</div>
                        <div class="card_price">${product.price}</div>
                    </div>
                    </div>
                    `;
          dessertWrapper.appendChild(cardElement);

          const refreshIcon = document.querySelector(".refresh");

          refreshIcon.addEventListener("click", () => {
            cardElement.classList.toggle("card-element-active");
          });

                    //MODAL COFFEE
                    cardElement.addEventListener("click", () => {
                      const bodyWrapper = document.querySelector(".body-wrapper");
          
                      const modalElement = document.createElement("div");
                      modalElement.classList.add("modal-js");
          
                      modalElement.innerHTML = `
                                  <div class="modal_overflow">
                                  <div class="modal_frame">
                                      <div class="modal_grid">
                                          <div class="modal_col_1">
                                              <img class="modal_img" src="${product.photo}" alt="coffee">
                                          </div>
                                          <div class="modal_col_2">
                                              <div class="modal_title">
                                                  <div class="name">${product.name}</div>
                                                  <div class="descr">${product.description}</div>
                                              </div>
                                              <div class="modal_size">
                                                  Size
                                                  <div class="size_tabs_wrapper">
                                                      <div data-size="s" class="modal_size_tab active">
                                                          <div class="size">S</div>
                                                          <div class="ml">${product.sizes.s.size}</div>
                                                      </div>
                                                      <div data-size="m" class="modal_size_tab">
                                                          <div class="size">M</div>
                                                          <div class="ml">${product.sizes.m.size}</div>
                                                      </div>
                                                      <div data-size="l" class="modal_size_tab">
                                                          <div class="size">L</div>
                                                          <div class="ml">${product.sizes.l.size}</div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="modal_additives">
                                                  Additives
                                                  <div class="additives_tabs_wrapper">
                                                      <div data-additives="${product.additives[0].name}" class="modal_additives_tab">
                                                          <div class="num">1</div>
                                                          <div class="ingr">${product.additives[0].name}</div>
                                                      </div>
                                                      <div data-additives="${product.additives[1].name}" class="modal_additives_tab">
                                                          <div class="num">2</div>
                                                          <div class="ingr">${product.additives[1].name}</div>
                                                      </div>
                                                      <div data-additives="${product.additives[2].name}" class="modal_additives_tab">
                                                          <div class="num">3</div>
                                                          <div class="ingr">${product.additives[2].name}</div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="modal_total">
                                                  <div class="total">Total:</div>
                                                  <div class="price">${product.price}</div>
                                              </div>
                                              <div class="modal_alert">
                                                  <div class="svg">
                                                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                          xmlns="http://www.w3.org/2000/svg">
                                                          <g clip-path="url(#clip0_268_12877)">
                                                              <path d="M8 7.66663V11" stroke="#403F3D" stroke-linecap="round"
                                                                  stroke-linejoin="round" />
                                                              <path d="M8 5.00667L8.00667 4.99926" stroke="#403F3D" stroke-linecap="round"
                                                                  stroke-linejoin="round" />
                                                              <path
                                                                  d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00004C14.6663 4.31814 11.6816 1.33337 7.99967 1.33337C4.31778 1.33337 1.33301 4.31814 1.33301 8.00004C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z"
                                                                  stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
                                                          </g>
                                                          <defs>
                                                              <clipPath id="clip0_268_12877">
                                                                  <rect width="16" height="16" fill="white" />
                                                              </clipPath>
                                                          </defs>
                                                      </svg>
                                                  </div>
                          
                                                  <div class="alert_descr">
                                                      The cost is not final. Download our mobile app to see the final price and place your
                                                      order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.
                                                  </div>
                                              </div>
                                              <div class="modal_close">
                                                  Close
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                                  `;
          
                      bodyWrapper.appendChild(modalElement);
          
                      // MODAL SIZE AND ADDITIVES
                      const sizeTab = document.querySelectorAll(".modal_size_tab");
                      const additivesTab = document.querySelectorAll(".modal_additives_tab");
                      const sumDiv = document.querySelector(".price");
                      let totalSum = 0;
                      let startPrice = +product.price.slice(1);
          
                      function calcTotalSum(size) {
                        let addPrice = +product.sizes[size].addprice;
                        const selectedAdditives = document.querySelectorAll(
                          ".modal_additives_tab.active"
                        );
                        selectedAdditives.forEach((additive) => {
                          const additiveName = additive.dataset.additives;
                          const additivePrice = +product.additives.find(
                            (a) => a.name === additiveName
                          ).addprice;
                          addPrice += additivePrice;
                        });
          
                        totalSum = startPrice + addPrice;
          
                        sumDiv.innerHTML = `
                          $${totalSum.toFixed(2)}
                          `;
                      }
          
                      sizeTab.forEach((element) => {
                        element.addEventListener("click", (e) => {
                          sizeTab.forEach((item) => {
                            if (item !== element && item.classList.contains("active")) {
                              item.classList.remove("active");
                            }
                          });
          
                          element.classList.add("active");
          
                          if (element.classList.contains("active")) {
                            const size = element.dataset.size;
                            calcTotalSum(size);
                          }
                        });
                      });
          
                      additivesTab.forEach((element) => {
                        element.addEventListener("click", (e) => {
                          element.classList.toggle("active");
                          const sizeElement = document.querySelector(
                            ".modal_size_tab.active"
                          );
                          
                          if (sizeElement) {
                            const size = sizeElement.dataset.size;
                            calcTotalSum(size);
                          }
                        });
                      });
          
                      //MODAL CLOSE
                      const triggerClose = document.querySelector(".modal_close"),
                        modalOverflow = document.querySelector(".modal_overflow");
          
                      triggerClose.addEventListener("click", () => {
                        bodyWrapper.removeChild(modalElement);
                      });
          
                      modalOverflow.addEventListener("click", (e) => {
                        if (e.target === modalOverflow) {
                          bodyWrapper.removeChild(modalElement);
                        }
                      });
          
                      document.addEventListener("keydown", (e) => {
                        if (e.code === "Escape") {
                          bodyWrapper.removeChild(modalElement);
                        }
                      });
                    });
        }
      });
    }
    displayDataDessert();
  }

  createCard();
});
