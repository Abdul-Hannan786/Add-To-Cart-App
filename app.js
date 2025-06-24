const slideImages = [
  "https://pixexid.com/api/download/image/a-burger-with-a-sense-of-wanderlust-backpacks-through-a-food-landscape-with-fry-9hbp0rfh.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn6q8_0SwnNkM0c0vOT_twL1yzrcvlGuToSw&s",
  "https://pixexid.com/api/download/image/a-burger-with-a-sense-of-wanderlust-backpacks-through-a-food-landscape-with-fry-9hbp0rfh.jpeg",
];

function displaySlider() {
  let slidesContainer = document.querySelectorAll(".slides")[0];

  for (let i = 0; i < slideImages.length; i++) {
    let img = `<img src="${slideImages[i]}" alt="Slide ${i + 1}">`;
    slidesContainer.innerHTML += img;
  }
}

displaySlider();

const products = [
  {
    id: "502c305a-997e-4534-97b8-f6f7862f3737",
    image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
    productName: "THE Doppler",
    price: "$10.00",
  },
  {
    id: "67aadbfe-a6d9-4d8d-a436-27c369cff5ff",
    image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
    productName: "Pentra RELOADED",
    price: "$20.00",
  },
  {
    id: "54c3c17e-b3e9-469b-800a-b065d193a6d9",
    image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
    productName: "PAK DOUBLE CHEESE",
    price: "$50.00",
  },
  {
    id: "e2085e01-f142-4475-8124-e24722cff1d6",
    image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
    productName: "Big Bang",
    price: "$40.00",
  },
];

function createProductCard() {
  for (let i = 0; i < products.length; i++) {
    let productListContainer = document.querySelectorAll(".product-list")[0];

    let product = products[i];
    let productCard = `
          <div class="product-item">
            <img
              src="${product.image}"
              alt="${product.productName} image"
            />
            <h3>${product.productName}</h3>
            <p>${product.price}</p>
            <button onclick="addToCartinObj(${i})">Add to Cart</button>
          </div>
      `;
    productListContainer.innerHTML += productCard;
  }
}

createProductCard();

let cart = {};
function addToCartinObj(index) {
  const { id } = products[index];

  if (id in cart) {
    cart[id].qty = cart[id].qty + 1;
    cart[id].totalPrice = cart[id].qty * cart[id].price.slice(1);
  } else {
    cart[id] = { ...products[index] };
    cart[id].qty = 1;
    cart[id].totalPrice = cart[id].qty * Number(cart[id].price.slice(1));
  }

  cart.totalBill = Object.keys(cart)
    .filter((key) => key !== "totalBill")
    .reduce((sum, key) => {
      return sum + cart[key].totalPrice;
    }, 0);

  console.log(cart);

  const itemPlace = document.querySelector(".items");
  const billDiv = document.querySelector(".total-bill");

  itemPlace.innerHTML = "";
  for (let props in cart) {
    if (props !== "totalBill") {
      const { productName, image, price, qty, totalPrice } = cart[props];
      let cartItem = `
            <div class="new-row">
                <div class="apart">
                  <div class="item-img"><img src="${image}" alt=""></div>
                  <h4>${productName}</h4>
                </div>
                <h4>${price}</h4>
                <h4>${qty}</h4>
                <h4>$${totalPrice}</h4>
              </div>
                        `;

      itemPlace.innerHTML += cartItem;
    }
  }

  let billBox = `
    <h3>Total Bill :</h3>
    <h3>$${cart.totalBill}</h3>
    `;

  billDiv.innerHTML = billBox;
  billDiv.style.borderTop = "3px solid Black";
}

const cartLi = document.querySelector(".cart");
const itemDiv = document.querySelector(".cart-item");

function showCart() {
  cartLi.style.display = "none";
  itemDiv.style.display = "block";
}

function closeCart() {
  cartLi.style.display = "initial";
  itemDiv.style.display = "none";
}

// const itemPlace = document.querySelector(".items")

// let cartItem = `
// <div class="new-row">
//     <div class="apart">
//       <div class="item-img"><img src="${itemVal.image}" alt=""></div>
//       <h4>${itemVal.productName}</h4>
//     </div>
//     <h4>${itemVal.price}</h4>
//     <h4>${itemVal.qty}</h4>
//     <h4>$${itemVal.totalPrice}</h4>
//   </div>
//             `

//             itemPlace.innerHTML += cartItem

// let cart = []

// function addToCartinArr(index) {
//     const { id } = products[index]

//     let matchfound = false;
//     let targerIndex

//     cart.forEach((item, ind) => {
//         if (item.id === id) {
//             matchfound = true
//             targerIndex = ind
//         }{}
//     })

//     if (matchfound) {
//         const product = cart[targerIndex]
//         product.qty = product.qty + 1;
//         product.totalPrice = `$${product.qty * Number(product.price.slice(1))}`
//     }
//     else {
//         let cloneProduct = { ...products[index] }
//         cloneProduct.qty = 1
//         cloneProduct.totalPrice = cloneProduct.qty * Number(cloneProduct.price.slice(1))
//         cart.push(cloneProduct)
//     }
//     console.log(cart)
// }
