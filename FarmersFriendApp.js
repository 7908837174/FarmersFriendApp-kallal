const items = [
    {    
        id:1,
        item_image: 'https://th.bing.com/th/id/OIP.YBaLhwi05jZ-OjAWq0Xj3wHaHa?pid=ImgDet&w=185&h=185&c=7&dpr=1.3',
        rating: { stars: 4.5, noOfReviews: 1400 },
        company_name: 'Gold man',
        item_name: 'The Gold Food',
        current_price: 101,
        original_price: 300,
        discount_percentage: 67,
    },
    {
        id:2,
        item_image: ' https://img.freepik.com/premium-photo/3d-illustration-grocer-man-isolated-market-backgroundshopping-consept_175994-70229.jpg?w=2000',
        rating: { stars: 4.5, noOfReviews: 1400 },
        company_name: 'Gold man',
        item_name: 'The Gold Food',
        current_price: 101,
        original_price: 300,
        discount_percentage: 67,
    },
    {
        id:3,
        item_image: ' https://img.freepik.com/premium-photo/3d-illustration-grocer-man-isolated-market-backgroundshopping-consept_175994-70227.jpg?w=2000',
        rating: { stars: 4.5, noOfReviews: 1400 },
        company_name: 'Gold man',
        item_name: 'The Gold Food',
        current_price: 101,
        original_price: 300,
        discount_percentage: 67,
    },
    {
        id:4,
        item_image: 'https://leslieporterfield.com/wp-content/uploads/2020/01/images1306-5e14250b08c5f.jpg ',
        rating: { stars: 4.5, noOfReviews: 1400 },
        company_name: 'Gold man',
        item_name: 'The Gold Food',
        current_price: 101,
        original_price: 300,
        discount_percentage: 67,
    },
    {
        id:5,
        item_image: 'https://thh.bing.com/th/id/OIP.xN9DyVxndji8NQTjr5zVfQAAAA?w=355&h=560&rs=1&pid=ImgDetMain ',
        rating: { stars: 4.5, noOfReviews: 1400 },
        company_name: 'Gold man',
        item_name: 'The Gold Food',
        current_price: 101,
        original_price: 300,
        discount_percentage: 67,
    },
    {
        id:6,
        item_image: 'https://th.bing.com/th/id/OIP.vWTM85S-puoeh51NNbdX7AHaLb?w=1050&h=1620&rs=1&pid=ImgDetMain ',
        rating: { stars: 4.5, noOfReviews: 1400 },
        company_name: 'Gold man',
        item_name: 'The Gold Food',
        current_price: 101,
        original_price: 300,
        discount_percentage: 67,
    },
    {
        id:7,
        item_image: ' https://static.vecteezy.com/system/resources/previews/029/543/509/non_2x/a-cartoon-character-in-a-grocery-store-selling-fruit-ai-generated-pro-photo.jpg',
        rating: { stars: 4.5, noOfReviews: 1400 },
        company_name: 'Gold man',
        item_name: 'The Gold Food',
        current_price: 101,
        original_price: 300,
        discount_percentage: 67,
    },
    {
        item_image: 'https://www.indigoag.com.br/hubfs/milhor%20agricultor%20jovem.jpg',
        rating: { stars: 4.5, noOfReviews: 1400 },
        company_name: 'Gold man',
        item_name: 'The Gold Food',
        current_price: 101,
        original_price: 300,
        discount_percentage: 67,
    },
    {
        item_image: 'https://th.bing.com/th/id/OIP.YBaLhwi05jZ-OjAWq0Xj3wHaHa?pid=ImgDet&w=185&h=185&c=7&dpr=1.3',
        rating: { stars: 4.5, noOfReviews: 1400 },
        company_name: 'Gold man',
        item_name: 'The Gold Food',
        current_price: 101,
        original_price: 300,
        discount_percentage: 67,
    },
];

// import { items } from "./ITAMFarmersFriendApp";
// console.log("items");

function renderItems() {
    const container = document.getElementById("product-items");
    items.forEach(item => {
        const productElement = document.createElement("div");
        productElement.classList.add("product-item");

        productElement.innerHTML = `
            <div class="product-image">
                <img src="${item.item_image}" alt="${item.item_name}">
            </div>
            <div class="product-details">
                <h3>${item.item_name}</h3>
                <p>Company: ${item.company_name}</p>
                <p>Rating: ${item.rating.stars} stars (${item.rating.noOfReviews} reviews)</p>
                <p><span class="current-price">$${item.current_price}</span> <span class="original-price">$${item.original_price}</span></p>
                <p>Discount: ${item.discount_percentage}% OFF</p>
                <button class="add-to-cart" onclick="addToCart('${item.item_name}')">Add to Cart</button>
            </div>
        `;
        container.appendChild(productElement);
    });
}


function addToCart(itemName) {
    alert(`${itemName} has been added to your cart!`);
}
 
document.addEventListener('DOMContentLoaded', renderItems);


////////////////////////////////////////////////////////

// app.js



// import { items } from "./ITAMFarmersFriendApp";  

// function renderItems() {
//     const container = document.getElementById("product-items");
//     items.forEach(item => {
//         const productElement = document.createElement("div");
//         productElement.classList.add("product-item");

//         productElement.innerHTML = `
//             <div class="product-image">
//                 <img src="${item.item_image}" alt="${item.item_name}">
//             </div>
//             <div class="product-details">
//                 <h3>${item.item_name}</h3>
//                 <p>Company: ${item.company_name}</p>
//                 <p>Rating: ${item.rating.stars} stars (${item.rating.noOfReviews} reviews)</p>
//                 <p><span class="current-price">$${item.current_price}</span> <span class="original-price">$${item.original_price}</span></p>
//                 <p>Discount: ${item.discount_percentage}% OFF</p>
//                 <button class="add-to-cart" onclick="addToCart('${item.item_name}')">Add to Cart</button>
//             </div>
//         `;
//         container.appendChild(productElement);
//     });
// }

// function addToCart(itemName) {
//     alert(`${itemName} has been added to your cart!`);
// }

// document.addEventListener('DOMContentLoaded', renderItems);   




















