const catalog = [
  {
    name: "Travel Jewelry Case",
    imgUrl: "Images/jewelry_box.jpg",
    color: "pink",
    category: "jewelry",
    price: 18.99,
    salePrice: 18.99,
    saleDesc: "",
    sku: "1",
    isNew: true,
    isFeatured: true,
    stars: 5,
    description:
      "Elegantly packaged personalized gift box for jewelries, rings, earrings, bracelets, pendants, and necklaces.  Perfect present for special occasions, including wedding, bridal party, bridal shower, engagement, bridesmaid gift package, Mother's Day, Valentine's Day, Christmas, sweet sixteen, birthday, prom, graduation, anniversary, display,keepsake, and showcase.",
  },
  {
    name: `Gold Heart Print - Set of 2`,
    imgUrl: "Images/gold_heart_print.jpg",
    color: "gold",
    category: "art",
    price: 59.99,
    salePrice: 23.4,
    saleDesc: "-39%",
    sku: "2",
    isNew: false,
    isFeatured: true,
    stars: 5,
    description:
      "Each print is handmade in my studio using a process where specialized foils are fused to paper under high temperature and pressure. Foil art catches the light to add a modern sparkle to any room. It also makes an amazing gift!",
  },
  {
    name: "Hattie Carnegie Vintage Brooch",
    imgUrl: "Images/brooch.jpg",
    color: "silver",
    category: "jewelry",
    price: 189.99,
    salePrice: 189.99,
    saleDesc: "",
    sku: "3",
    isNew: false,
    isFeatured: true,
    stars: 5,
    description:
      "Exceptional HATTIE CARNEGIE Austrian crystal and black diamond baguette rhinestones, punctuated by a convex button center. Exquisite and eye-catching design!",
  },
  {
    name: "White Peach + Hibiscus Luxury Candle",
    imgUrl: "Images/candle.jpg",
    color: "white",
    category: "house",
    price: 16.5,
    salePrice: 16.5,
    saleDesc: "",
    sku: "4",
    isNew: false,
    isFeatured: false,
    stars: 5,
    description: null,
  },
  {
    name: "Birth Flower Thick Bar Necklace",
    imgUrl: "Images/bar_necklace.jpg",
    color: "gold",
    category: "jewelry",
    price: 28.5,
    salePrice: 28.5,
    saleDesc: "",
    sku: "5",
    isNew: false,
    isFeatured: false,
    stars: 5,
    description: null,
  },
  {
    name: "Mushrooms Neon Sign",
    imgUrl: "Images/mushroom_sign.jpg",
    color: "other",
    category: "house",
    price: 59.99,
    salePrice: 59.99,
    saleDesc: "",
    sku: "6",
    isNew: false,
    isFeatured: false,
    stars: 5,
    description: null,
  },
  {
    name: "Custom Soundwave Print",
    imgUrl: "Images/soundwave_print.jpg",
    color: "gold",
    category: "house",
    price: 55.0,
    salePrice: 55.0,
    saleDesc: "",
    sku: "7",
    isNew: false,
    isFeatured: false,
    stars: 5,
    description: null,
  },
  {
    name: "Mercedes Metal Led Sign",
    imgUrl: "Images/benz_sign.jpg",
    color: "black",
    category: "house",
    price: 80.0,
    salePrice: 80.0,
    saleDesc: "",
    sku: "8",
    isNew: false,
    isFeatured: false,
    stars: 5,
    description: null,
  },
  {
    name: "Best Choice Egg Chair",
    imgUrl: "Images/egg_chair.jpg",
    color: "white",
    category: "house",
    price: 171.5,
    salePrice: 171.5,
    saleDesc: "",
    sku: "9",
    isNew: false,
    isFeatured: false,
    stars: 5,
    description: null,
  },
  {
    name: "Tamagotchi Wall Mirror",
    imgUrl: "Images/tamogatchi_mirror.jpg",
    color: "pink",
    category: "house",
    price: 60.0,
    salePrice: 60.0,
    saleDesc: "",
    sku: "10",
    isNew: false,
    isFeatured: false,
    stars: 5,
    description: null,
  },
  {
    name: "Bike Desk Lamp Antique Crankset",
    imgUrl: "Images/bike_lamp.jpg",
    color: "silver",
    category: "art",
    price: 164.73,
    salePrice: 164.73,
    saleDesc: "",
    sku: "11",
    isNew: false,
    isFeatured: false,
    stars: 5,
    description: null,
  },
  {
    name: "Christmas Trees Scandinavian Wall Decor",
    imgUrl: "Images/scandinavian_tree_decor.jpg",
    color: "gold",
    category: "art",
    price: 17,
    salePrice: 17,
    saleDesc: "",
    sku: "12",
    isNew: false,
    isFeatured: false,
    stars: 5,
    description: null,
  },
];

//************  SELECTORS  ************//
//  banner on top of nav
const card = document.querySelector(".info-bar");
const closeNavBannerBtn = card.querySelector("[btn-close]");
const bannerTextEl = document.getElementById("info-bar-text");

// menu + mobile menu
const navToggle = document.querySelector(".menu-mobile");
const nav = document.querySelector(".nav-list");
const footer = document.querySelector(".page-footer");

//cart elements
const cartEl = document.querySelector(".cart");
const cartCheckoutBtn = cartEl.querySelector(".checkout");
const cartNavBtn = document.getElementById("cart-btn");
const cartCloseBtn = cartEl.querySelector("[btn-close]");
const cartQuantityEl = document.querySelector(".cart-quantity");
const subtotalEl = document.getElementById("subtotal");

//where filtered products will be rendered
const itemsContainerEl = document.querySelector("#itemsContainer");
//where hero, components, and featured products live
const heroContainerEl = document.querySelector(".wrapper-1");
//where filters and grid/row icons live
const shopContainerEl = document.querySelector(".shop-wrap");
//buttons that trigger the shop container and hide the hero
const shopBtns = document.querySelectorAll("[data-shop]");
//where products added to cart will be rendered in cart
const cartItemsContainerEl = document.getElementById("cart-products");
//virtual assistant
const chatRenderEl = document.querySelector(".assistant-box-main");
const chatInput = document.getElementById("chat");
const santaSide = document.querySelector(".assistant-side");
//search bar elements
const searchBar = document.querySelector(".search-bar");
const searchBarInput = document.querySelector(".search-bar-input");
const searchBarButton = document.querySelector(".search-bar-button");
//featured products
const featuredProductsContainerEl = document.querySelector(
  ".featured-products-container"
);
const featuredProductDetailContainerEl = document.querySelector(
  ".featured-product-detail-container"
);
const featuredProducts = document.querySelector(".feat-products");
const featuredProductsId = document.querySelector("#feat-products");
//const featProductTabs = featuredProducts.querySelectorAll('[data-tab-target]');
const featProductsContent =
  featuredProducts.querySelectorAll("[data-tab-content]");
const featuredProductsBtn = featuredProducts.querySelectorAll(".btn");
//icons to toggle bw grid view and row view
const viewGrid = document.getElementById("radio-grid");
const viewRow = document.getElementById("radio-row");

//****************** all dialogs *******************//
//all dialogs/modals
const dialogs = document.querySelectorAll("dialog");
//payment/checkout dialog
const paymentFormDialog = document.querySelector(".payment-wrapper");
const paymentFormSubmitBtn = paymentFormDialog.querySelector(
  ".payment-form-submit-btn"
);
//purchase complete dialog
const purchaseCompleteDialog = document.querySelector("#purchase-complete");
const triggerFeedbackBtn =
  purchaseCompleteDialog.querySelector(".feedback-btn");
//feedback dialog
const feedbackDialog = document.querySelector(".feedback-modal");
const feedbackSubmitBtn = feedbackDialog.querySelector(".feedback-btn");
//FAQs dialog
const faqs = document.querySelector(".faqs");
const accordionWrapperEl = faqs.querySelectorAll(".accordion-wrap");
//newsletter dialog
const newsletter = document.querySelector("#newsletter-modal");
//gift cards dialog
const giftCards = document.querySelector(".gift-card-modal");
const plusGift = giftCards.querySelector(".plus-card");
const minusGift = giftCards.querySelector(".minus-card");
const giftCardInput = giftCards.querySelector("#amount");
const cardAmounts = giftCards.querySelector(".card-amounts");
const cardAmountEl = cardAmounts.querySelectorAll("button");
//trigger gift card modal
const shopGiftCardBtns = document.querySelectorAll("[data-gift]");
//coupon dialog
const couponPopUp = document.querySelector(".coupon-modal");
const couponBtns = couponPopUp.querySelectorAll("button");

//cookie banner
const cookieBanner = document.querySelector(".cookie-banner");
const cookieBtns = cookieBanner.querySelectorAll("button");

//all links
const links = document.querySelectorAll("a");
//render shop container
const homeLinks = document.querySelectorAll("[data-home]");

//prevent default behaviour of links
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

//find all dialogs with a [btn-close] and let that button close them;
dialogs.forEach((dialog) => {
  const closeDialogBtn = dialog.querySelector("[btn-close");
  closeDialogBtn.addEventListener("click", () => {
    dialog.close();
  });
});

homeLinks.forEach((link) => {
  link.addEventListener("click", () => {
    shopContainerEl.classList.add("hide");
    heroContainerEl.classList.remove("hide");

    // const navLink = document.querySelector('.list-item[data-home]');

    // if(link === navLink) {
    //     featuredProductsId.scrollIntoView();
    // }
  });
});

//close the banner at the top of the header
closeNavBannerBtn.addEventListener("click", () => {
  card.classList.add("hide");

  setTimeout(() => card.classList.remove("hide"), 4000);
});

//close the cookie banner
cookieBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    cookieBanner.classList.add("hide");
  });
});

//mobile menu button

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav-visible");
});

//cart slide in/out

hideCart(cartNavBtn);
hideCart(cartCloseBtn);

function hideCart(btn) {
  btn.addEventListener("click", () => {
    cartEl.classList.toggle("hide");
  });
}

//COUPON MODAL
//show coupon after 4s of loading
function opencouponPopUp() {
  setTimeout(function () {
    couponPopUp.showModal();
    scrollTo(0, 0);
  }, 2000);
}
//set all buttons to close coupon modal
couponBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    couponPopUp.close();
  });
});

//trigger and close payment form on "checkout" , trigger Purchase Complete Dialog
cartCheckoutBtn.addEventListener("click", () => {
  paymentFormDialog.showModal();
});

//payment form submit button , closes payment form modal and triggers purchase complete modal
paymentFormSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  paymentFormDialog.close();
  setTimeout(function () {
    purchaseCompleteDialog.showModal();
  }, 800);
});

triggerFeedbackBtn.addEventListener("click", () => {
  purchaseCompleteDialog.close();
  feedbackDialog.showModal();
});

feedbackSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  feedbackDialog.close();
});

//****NEWSLETTER DIALOG**** */
//open newsletter dialog
footer.querySelector("#trigger-newsletter").addEventListener("click", (e) => {
  e.preventDefault();
  newsletter.showModal();
  scrollTo(0, 0);
});

//trigger Gift Cards modal
shopGiftCardBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    giftCards.showModal();
    scrollTo(0, 0);
  });
});

//gift card functionality

let currentValue = 25;
cardAmountEl.forEach((el) => {
  el.addEventListener("click", () => {
    giftCardInput.value = `$${el.dataset.value}`;
    currentValue = el.dataset.value;
  });
});

plusGift.addEventListener("click", () => {
  currentValue++;
  giftCardInput.value = `$${currentValue}`;
});

minusGift.addEventListener("click", () => {
  --currentValue;
  if (currentValue <= 0) {
    currentValue = 0;
    giftCardInput.value = `$${0}`;
  } else {
    giftCardInput.value = `$${currentValue}`;
  }
});

giftCardInput.value = `$${currentValue}`;

//****FAQ DIALOG**** */
//open FAQ dialog
nav.querySelector("#trigger-faq").addEventListener("click", (e) => {
  e.preventDefault();
  faqs.showModal();
});

//FAQ dialog accordion functionality
accordionWrapperEl.forEach((wrap) => {
  const accordionBtn = wrap.querySelector(".accordion-btn");
  const accordionContent = wrap.querySelector(".accordion-content");

  accordionBtn.addEventListener("click", (e) => {
    const accordionIcon = e.target.querySelector(".fa-light");

    accordionContent.classList.toggle("hide");
    if (accordionContent.classList.contains("hide")) {
      accordionIcon.classList.add("fa-plus");
      accordionIcon.classList.remove("fa-xmark");
      accordionBtn.setAttribute("aria-expanded", false);
      accordionContent.setAttribute("aria-hidden", true);
    } else {
      accordionIcon.classList.add("fa-xmark");
      accordionIcon.classList.remove("fa-plus");
      accordionBtn.setAttribute("aria-expanded", true);
      accordionContent.setAttribute("aria-hidden", false);
    }
  });
});

shopBtns.forEach((shopBtn) => {
  shopBtn.addEventListener("click", (e) => {
    e.preventDefault;
    heroContainerEl.classList.add("hide");
    shopContainerEl.classList.remove("hide");
  });
});

//featured products viewTransitions
function setupFeaturedProductTabs() {
  const featProductTabs =
    featuredProducts.querySelectorAll("[data-tab-target]");

  featProductTabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      const innerTabs = featuredProducts.querySelectorAll("[data-tab-content]");

      innerTabs.forEach((innerTab) => innerTab.classList.remove("active"));
      //featProductTabs.forEach((innerTab) => tab.classList.remove('active'));
      e.target.classList.add("active");

      const target = featuredProducts.querySelector(e.target.dataset.tabTarget);
      if (!document.startViewTransition) {
        // featProductsContent.forEach(tabContent => {
        //     tabContent.classList.remove('active')
        // })
        // featProductTabs.forEach(tab => {
        //     tab.classList.remove('active')
        // })
        // tab.classList.add('active')
        target.classList.add("active");
      }

      document.startViewTransition(() => {
        // featProductsContent.forEach(tabContent => {
        //     tabContent.classList.remove('active');
        // });
        // featProductTabs.forEach(tab => {
        //     tab.classList.remove('active');
        // });
        // tab.classList.add('active');
        target.classList.add("active");
      });
    });
  });
}

//array to hold which products have been chosen from filter checkboxes
let filters = [];
//array to hold which items have been added to cart
let cart = [];

//handle clicks on various elements
document.addEventListener("click", handleClick);

function handleClick(event) {
  if (event.target.dataset.filter) {
    //the checkboxes
    //if the data-filter is not a number. parsedFilter = value of dtat-filter; if it is a number, parsedFilter = the filter converted to a number
    const parsedFilter = isNaN(Number(event.target.dataset.filter))
      ? event.target.dataset.filter
      : Number(event.target.dataset.filter);

    //if the checkbox is checked or the target is a link with data-filter...
    if (event.target.checked) {
      //if filters array doesnt have parsedFilter in it, we push it to filters
      if (!filters.some((filter) => filter === parsedFilter)) {
        filters.push(parsedFilter);
      }
      //if not a checked checkbox or a link with data-filter, filter out any values in filter array that arent equal to parsedFilter ? ("jewelry" "art" "home")
    } else if (event.target.tagName === "A") {
      filters = [];
      filters.push(parsedFilter);

      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((box) => {
        box.checked = false;
        if (box.dataset.filter === parsedFilter) {
          box.checked = true;
        }
      });
    } else {
      filters = filters.filter((filter) => filter !== parsedFilter);
    }

    heroContainerEl.classList.add("hide");
    shopContainerEl.classList.remove("hide");
    renderItems();
    // console.log(parsedFilter);
    // console.log(filters)
  } else if (event.target.dataset.sku) {
    const sku = event.target.dataset.sku;
    //checking if this sku is already in the cart...
    const cartItem = cart.find((curItem) => curItem.sku === sku);

    if (cartItem) {
      //if it IS in the cart we want to remove...
      cart = cart.filter((curItem) => curItem.sku !== sku);
    } else {
      //if its not in the cart, we want to add
      cart.push({ sku, quantity: 1 });
    }

    renderCartItems(cartItemsContainerEl, cart);
    updateSubtotal();
    updateCartCount();
    renderItems();
    renderFeaturedProducts();
  } else if (event.target.closest(".counter")) {
    //incrementing buttons in cart
    const counterBtn = event.target.closest(".counter");

    const productToIncrement = counterBtn.closest("[data-itemsku]");
    const productToIncrementSku = productToIncrement.dataset.itemsku;

    // const counterEl = productToIncrement.querySelector('.counter-el')
    const matchingSku = cart.find(
      (carItem) => carItem.sku === productToIncrementSku
    );

    if (counterBtn.classList.contains("plus")) {
      matchingSku.quantity++;
    } else if (counterBtn.classList.contains("minus")) {
      --matchingSku.quantity;
      if (matchingSku.quantity < 1) {
        cart = cart.filter((curItem) => curItem.sku !== productToIncrementSku);
      }
    }

    renderCartItems(cartItemsContainerEl, cart);
    updateSubtotal();
    updateCartCount();
    renderItems();
  } else if (event.target.closest(".assistant-btn")) {
    // hide and show the virtual assistant box
    const assistantBox = document.querySelector(".assistant-box");

    assistantBox.classList.toggle("hide");
    if (assistantBox.classList.contains("hide")) {
      event.target.classList.add("purple-gradient");
    } else {
      event.target.classList.remove("purple-gradient");
    }
  } else if (event.target.closest(".send-btn")) {
    //click event on the "send button" next to input on virtual assistant
    outputInput();
  }
}

// Renders filtered items - this will first calculate WHICH items to render by applying
// the filter logic, then it renders the filtered list...
function renderItems() {
  let filteredItems = applyFilters(catalog);
  renderFilteredItems(filteredItems);
}

function renderFeaturedProducts() {
  let html = "";

  const featuredProds = catalog.filter((item) => item.isFeatured);

  featuredProds.forEach((product) => {
    html += `
        <div class="feat-img-wrap" data-tab-target="#feature-${product.sku}">
            <img src="${product.imgUrl}" alt="">
            ${
              product.isNew
                ? '<span class="tag uppercase" data-new>New</span>'
                : ""
            }
            ${
              product.saleDesc
                ? '<span class="tag uppercase" data-sale>' +
                  product.saleDesc +
                  "</span>"
                : ""
            }
        </div>
        `;
  });

  featuredProductsContainerEl.innerHTML = html;

  html = "";

  featuredProds.forEach((product, i) => {
    const prodInCart = isInCart(product.sku);
    html += `
            <section style="view-transition-name: featured-product-${
              product.sku
            }" data-tab-content id="feature-${product.sku}" class="product ${
      i == 0 ? "active" : ""
    }">
                <div class="feat-img-wrap">
                    <img src="${product.imgUrl}" alt="">
                    ${
                      product.isNew
                        ? '<span class="tag uppercase" data-new>New</span>'
                        : ""
                    }
                </div>
            
                <h2>${product.name}</h2>
                <p class="price">$${product.salePrice}</p>
                <div class="row ai-cen gap-quarter star-row">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="description">${product.description}</p>
                <button class="btn row ai-cen gap-half ${
                  prodInCart ? "purple-gradient" : ""
                }" data-sku=${product.sku}>${
      prodInCart
        ? 'In cart <i class="fa-sharp fa-solid fa-bag-shopping"></i>'
        : 'Add to Cart <i class="fa-sharp fa-regular fa-bag-shopping"></i>'
    }</button>
            </section>                
        `;
  });

  featuredProductDetailContainerEl.innerHTML = html;

  setupFeaturedProductTabs();
}

function applyFilters(inputList) {
  let filteredItems;
  if (filters.length < 1) {
    // If there are no filters just render the entire catalog
    filteredItems = inputList;
  } else {
    // There ARE filters so we need to figure out which items meet
    // ANY of the filter terms (i.e. if you check pink and gold the
    // list will return anything that is EITHER pink or gold)
    // this is certainly not a sophisticated filter function BUT
    // it's common for these shopping cart type lists
    filteredItems = inputList.filter((item) => {
      // this logic can be a little convoluted if you're not
      // comfortable with some of the array functions like
      // some() and filter() but the basics is this:
      // *filter* to include items which meet at least *some* of the
      // criteria
      return filters.some((filter) => {
        // we need to treat numbers a little different from strings
        // because numbers is price and had slightly different logic
        // that color or category.
        if (typeof filter === "number") {
          return item.price < filter;
        } else {
          return item.color === filter || item.category == filter;
        }
      });
    });
  }

  return filteredItems;
}

// re-factored function to be used in both the renderItem() call and
// the search handler
function renderFilteredItems(filteredItems) {
  let html = "";

  filteredItems.forEach((item) => {
    html += gridOrRowView(item);
  });

  itemsContainerEl.innerHTML = html;
}

// function renderFeaturedItems() {
//     let html = '';
//     for(let i = 0; i < catalog.length; i++) {
//         if(i.sku === 1 || i.sku === 2 || i.sku === 3) {
//             html += getFeaturedItems(i);
//         }
//     }

//     const featItemsContainerEl = document.querySelector('.feat-products');
//     featItemsContainerEl.innerHtml = ` <h1>Featured Products</h1>
//             <p>Discover the magic of the season with our handpicked Featured Products. From enchanting decorations to delightful gifts, these curated items are sure to add a touch of joy to your festive celebrations.</p>

//             <div class="row ai-cen gap-1 feat-img-row">
//                 <div class="feat-img-wrap" data-tab-target="#case">
//                     <img src="https://i.imgur.com/bDYMlfg.jpg" alt="">
//                     <span class="tag uppercase" data-new>New</span>
//                 </div>
//                 <div class="feat-img-wrap" data-tab-target="#poster">
//                     <img src="https://i.imgur.com/bIPYxnC.jpg" alt="">
//                     <span class="tag uppercase" data-sale>-39%</span>
//                 </div>
//                 <div class="feat-img-wrap" data-tab-target="#brooch">
//                     <img src="https://i.imgur.com/kZ9QFqb.jpg" alt="">
//                 </div>
//             </div>

//             ${html}`
// }

//loop through an array (in this case the cart array) and add the cartHTML for each object to cartHtml variable. then set the container (the cartEl) to the value of cartHtml
function renderCartItems(container, arr) {
  if (arr.length < 1) {
    // If there are no items in cart just render the entire catalog
    container.innerHTML = `<p class="spacer">No items in Cart</p>`;
  } else {
    // There ARE items in the cart array
    let cartHTML = "";

    arr.forEach((item) => {
      cartHTML += getCartItemHTML(item);
    });

    container.innerHTML = cartHTML;
  }
}

function getCartItemHTML(cartItem) {
  const item = catalog.find((catItem) => catItem.sku === cartItem.sku);

  return ` 
        <div class="product-cart grid" data-itemsku=${item.sku}>
            <img src="${item.imgUrl}" alt="">

            <h3>${item.name}</h3>
            <p class="desat small"><span class="pricing">$${item.price}</span></p>
            <div class="counter-wrap row ai-cen gap-half">
                <button class="counter minus grid pc-cen">
                        <i class="fa-solid fa-minus"></i>                  
                </button>
                <input type="number" class="counter-el" id="counter-${item.sku}" value="${cartItem.quantity}"></span>
                <button class="counter plus grid pc-cen">
                        <i class="fa-solid fa-plus"></i>                   
                </button>
            </div>
         </div>
    `;
}

function updateSubtotal() {
  // calculate the total
  let subtotal = 0;
  cart.forEach((cartItem) => {
    const catalogItem = catalog.find((catItem) => catItem.sku === cartItem.sku);
    subtotal += cartItem.quantity * catalogItem.price;
  });

  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
}

function updateCartCount() {
  if (cart.length < 1) {
    cartQuantityEl.classList.add("hide");
  } else {
    cartQuantityEl.classList.remove("hide");
    let cartItemCount = cart.length;
    cartQuantityEl.textContent = cartItemCount;
  }
}

const bannerArr = [
  'Use code "Xmas" for a 20% discount at checkout',
  "Free shipping on all orders over $89",
  "Money back guarantee within 30 days",
  "Our online support is here for you",
];

function replaceBanner() {
  let count = 0;
  const purpGradient = "linear-gradient(to right, #8b64f5, #a186ed, #5c3db1)";
  const blueGradient = "linear-gradient(to right, #70b7f1, #56a5e6, #0c6cba)";

  setInterval((e) => {
    bannerTextEl.innerHTML = `${bannerArr[count]}`;
    card.style.backgroundImage = count % 2 === 0 ? purpGradient : blueGradient;
    count++;
    count = count >= bannerArr.length ? 0 : count;
  }, 5000);
}

// // add input to chat bubbles

santaSide.querySelector(".desat").innerHTML = `Santa Klaus ${timestamp()}`;

chatInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    outputInput();
  }
});

//create/append/render chat bubblE
function createRenderChatBubble(reply) {
  const chatResponse = document.createElement("div");
  chatResponse.classList.add("assistant-chat-item", "grid", "assistant-side");
  chatResponse.innerHTML = `<img class="chat-avatar" src="https://icodethis.com/images/iCodeMas/tiny_santa.png" alt="">
        <div class="assistant-chat-bubble-wrapper">
            <div class="chat-bubble">
                <p>${reply}</p>
            </div>
            <p class="desat small">Santa Klaus, ${timestamp()}</p>
        </div>`;
  chatRenderEl.appendChild(chatResponse);
  chatRenderEl.scrollTop = chatRenderEl.scrollHeight;
}

function outputInput() {
  const chatMessage = chatInput.value.trim();

  if (chatMessage === "" || chatMessage === " ") {
    alert("Please include content in your message");
    return;
  }

  const chatBubble = document.createElement("div");
  chatBubble.classList.add("assistant-chat-item", "client-side");

  chatBubble.innerHTML = `<div class="chat-bubble">
            <p>${chatMessage}</p>
        </div>
    
        <p class="desat small">${timestamp()}</p>`;

  chatRenderEl.appendChild(chatBubble);
  chatRenderEl.scrollTop = chatRenderEl.scrollHeight;

  chatInput.value = "";

  setTimeout(function () {
    const reply = virtualAssistant(chatMessage)
      .then((reply) => {
        createRenderChatBubble(reply);
      })
      .catch((err) => {
        createRenderChatBubble(
          "Let me ask my elves to respond to you on that!"
        );
      });
  }, 2000);
}

function timestamp() {
  const now = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(now);
}

function virtualAssistant(inputValue) {
  const apiKey = OPENAI_API;

  const url = "https://api.openai.com/v1/completions";

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: `Answer ${inputValue} as if you were Santa Klaus working as a virtual assistant for an e-commerce company in 15 words or less

            ###
            customers request: Will my package be delivered by Christmas?
            answer: Santa and his team of reindeer and elves always delivers by Christmas!

            ###

            customers request: ${inputValue}
            answer:

            `,
      max_tokens: 25,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const reply = data.choices[0].text;
      return reply;
    });
}

//****************SEARCH BAR****************//

//focus on click
searchBar.addEventListener("click", () => {
  searchBarInput.focus();
  heroContainerEl.classList.add("hide");
  shopContainerEl.classList.remove("hide");
});

// handle search input
searchBarInput.addEventListener("keyup", function (e) {
  const searchedItems = applySearchFilter(catalog);
  const filteredItems = applyFilters(searchedItems);

  renderFilteredItems(filteredItems);
});

function applySearchFilter(inputList) {
  const searchTerm = searchBarInput.value.toLowerCase();

  let filteredItems = inputList.filter(
    (catItem) =>
      catItem.category.toLowerCase().includes(searchTerm) ||
      catItem.name.toLowerCase().includes(searchTerm) ||
      catItem.color.toLowerCase().includes(searchTerm)
  );

  return filteredItems;
}

//******************GRID OR ROW ICONS******************//

//adds classes to the products to change them to grid or row
viewGrid.addEventListener("change", handleViewChange);
viewRow.addEventListener("change", handleViewChange);

//handleViewChange is used on the radio button event listeners
//checks whether row icon is checked , and applies the parents class or not
function handleViewChange() {
  if (viewRow.checked) {
    itemsContainerEl.classList.add("cardRowView");
  } else {
    itemsContainerEl.classList.remove("cardRowView");
  }

  renderItems();
}

//gridOrRowView is using getGridViewHTML or getRowViewHTML
function gridOrRowView(item) {
  if (viewRow.checked) {
    // if row button is checked, use the rowViewHTML
    return getRowViewItemHTML(item);
  } else {
    // if row button is NOT checked, use the gridViewHTML
    return getGridViewItemHTML(item);
  }
}

function isInCart(sku) {
  return cart.some((item) => item.sku === sku);
}

function getGridViewItemHTML(item) {
  const itemInCart = isInCart(item.sku);
  return ` 
        <section class="product-item" view-transition-name="product-${
          item.sku
        }">           
            <div class="feat-img-wrap">
                <img src="${item.imgUrl}" alt="">
                ${
                  item.isNew
                    ? '<span class="tag uppercase" data-new>New</span>'
                    : ""
                }
                <button class="cta row ai-cen jc-cen gap-quarter ${
                  itemInCart ? "purple-gradient" : ""
                }" data-sku=${item.sku}>${
    itemInCart
      ? 'In cart <i class="fa-sharp fa-solid fa-bag-shopping"></i>'
      : 'Add to Cart <i class="fa-sharp fa-regular fa-bag-shopping"></i>'
  }</button>
            </div>
            <h2>${item.name}</h2>
            <p class="price">$${item.price}</p>
        </section>    
    `;
}

//returns classes and HTML for each catalog item
function getRowViewItemHTML(item) {
  const itemInCart = isInCart(item.sku);

  return `<section class="product-item product-long">
        <div class="feat-img-wrap">
            <img src="${item.imgUrl}" alt="">
              ${
                item.isNew
                  ? '<span class="tag uppercase" data-new>New</span>'
                  : ""
              }
        </div>
    
        <h2>${item.name}</h2>
        <p class="price">$${item.price}</p>
    
    
        <button data-sku="${item.sku}" class="btn row ai-cen gap-half ${
    itemInCart ? "purple-gradient" : ""
  }">${
    itemInCart
      ? '<i class="fa-solid fa-cart-shopping"></i>'
      : '<i class="fa-regular fa-cart-shopping"></i>'
  }</button> 
        </section>`;
}

// function getFeaturedHTML(item) {
//      const itemInCart = isInCart(item.sku);
//       return `

//       <section style="view-transition-name: product-${item.sku}" data-tab-content class="product active">
//             <div class="feat-img-wrap">
//                 <img src="${item.imgUrl}" alt="">
//                  ${item.isNew ? '<span class="tag uppercase" data-new>New</span>' : ''}
//             </div>

//             <h2>${item.name}</h2>
//             <p class="price">$${item.price}</p>
//             <div class="row ai-cen gap-quarter star-row">
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star"></i>
//             </div>
//             <p class="description">${item.description}</p>
//             <button class="btn row ai-cen gap-half" data-sku="${item.sku}">Add to Cart <i class="fa-regular fa-cart-shopping"></i></button>
//         </section> `;
// }

//functions to run on load
function initApp() {
  renderItems();
  renderFeaturedProducts();
  renderCartItems(cartItemsContainerEl, cart);
  updateSubtotal();
  updateCartCount();
  replaceBanner();
  opencouponPopUp();
}

initApp();
