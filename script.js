let product = [
  {
    category: "Breakfast",
    title: "Buttermilk Pancakes",
    Description:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    price: 15.99,
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-1.jpeg",
  },
  {
    category: "Breakfast",
    title: "Country Delight",
    Description:
      "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
    price: 20.99,
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-4.jpeg",
  },
  {
    category: "Breakfast",
    title: "Bacon Overflow",
    Description:
      "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    price: 8.99,
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-7.jpeg",
  },
  {
    category: "Lunch",
    title: "Diner Double",
    Description:
      "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    price: 13.99,
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-2.jpeg",
  },
  {
    category: "Lunch",
    title: "Egg Attack",
    Description:
      "Sfranzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    price: 22.99,
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-5.jpeg",
  },
  {
    category: "Lunch",
    title: "American Classic",
    Description:
      "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    price: 12.99,
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-8.jpeg",
  },
  {
    category: "Shakes",
    title: "Godzilla MilkShake",
    Description:
      "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    price: 6.99,
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-3.jpeg",
  },
  {
    category: "Shakes",
    title: "Oreo Dream",
    Description:
      "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    price: 18.99,
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-6.jpeg",
  },
  {
    category: "Shakes",
    title: "Quarantine Buddy",
    Description:
      "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    price: 16.99,
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-9.jpeg",
  },
];

let content = document.querySelector(".products");
function allFood() {
  let myRenderedData = product
    .map((myProduct) => {
      //`` backtick is liay hty hein k static and dynamic data dono akhatay likh saktay hein
      return ` 
  <div class="food">
  <img src=${myProduct.image} alt="">
  <div class="item-info">
  <div class="info">
  <h4>${myProduct.title}</h4>
  <h5>$${myProduct.price}</h5>
  </div>
  <p>${myProduct.Description}</p>
  
  </div>
  </div> 
    `;
    })
    .join("");

  content.innerHTML = myRenderedData;
}

allFood();

function getLunch() {
  let filterLunch = product.filter((myLunch) => myLunch.category === "Lunch"); // product.filter is liay kia kyu k hmary array ka name product ha and us mein se shirt filter krne hein and .filter builtin function ha

  let myRenderedData = filterLunch
    .map((myLunch) => {
      return `
<div class="food">
  <img src=${myLunch.image} alt="">
  <div class="item-info">
  <div class="info">
  <h4>${myLunch.title}</h4>
  <h5>$${myLunch.price}</h5>
  </div>
  <p>${myLunch.Description}</p>
  </div>
  </div>
`;
    })
    .join("");
  content.innerHTML = myRenderedData;
}
function getBreakfast() {
  let filterBreakfast = product.filter(
    (myBreakfast) => myBreakfast.category === "Breakfast"
  ); // product.filter is liay kia kyu k hmary array ka name product ha and us mein se shirt filter krne hein and .filter builtin function ha

  let myRenderedData = filterBreakfast
    .map((myBreakfast) => {
      return `
<div class="food">
  <img src=${myBreakfast.image} alt="">
  <div class="item-info">
  <div class="info">
  <h4>${myBreakfast.title}</h4>
  <h5>$${myBreakfast.price}</h5>
  </div>
  <p>${myBreakfast.Description}</p>
  </div>
  </div>
`;
    })
    .join("");
  content.innerHTML = myRenderedData;
}
function getShakes() {
  let filterShakes = product.filter(
    (myShakes) => myShakes.category === "Shakes"
  ); // product.filter is liay kia kyu k hmary array ka name product ha and us mein se shirt filter krne hein and .filter builtin function ha

  let myRenderedData = filterShakes
    .map((myShakes) => {
      return `
<div class="food">
  <img src=${myShakes.image} alt="">
  <div class="item-info">
  <div class="info">
  <h4>${myShakes.title}</h4>
  <h5>$${myShakes.price}</h5>
  </div>
  <p>${myShakes.Description}</p>
  </div>
  </div>
  
`;
    })
    .join("");
  content.innerHTML = myRenderedData;
}
