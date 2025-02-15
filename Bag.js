document.addEventListener("DOMContentLoaded", displayCartItems);

function displayCartItems() {
    const bagItemsContainer = document.getElementById('bag-items-container');
    const bagItemCount = document.getElementById('bag-item-count');
    const totalMRP = document.getElementById('total-mrp');
    const discount = document.getElementById('discount');
    const convenienceFee = document.getElementById('convenience-fee');
    const totalAmount = document.getElementById('total-amount');

    // Retrieve the bag items from localStorage
    let bagItems = JSON.parse(localStorage.getItem('bagItems')) || [];

    let total = 0;

    // Dynamically insert product items into the bag
    bagItems.forEach(item => {
        total += item.current_price;  // Calculate total MRP

        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.innerHTML = `
            <img src="${item.item_image}" alt="${item.item_name}">
            <div class="product-details">
                <h4>${item.item_name}</h4>
                <p>Price: $${item.current_price}</p>
            </div>
        `;
        bagItemsContainer.appendChild(productDiv);
    });

    // Calculate the total price with discount and convenience fee
    const discountAmount = 30;  // Example discount value
    const convenienceAmount = 99;  // Example convenience fee value
    const finalTotal = total - discountAmount + convenienceAmount;

    // Update the price details on the page
    totalMRP.textContent = `$${total}`;
    discount.textContent = `-$${discountAmount}`;
    convenienceFee.textContent = `$${convenienceAmount}`;
    totalAmount.textContent = `$${finalTotal}`;

    // Update the number of items in the bag
    bagItemCount.textContent = bagItems.length;
}
 
