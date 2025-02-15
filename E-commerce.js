const deleteAllButton = document.getElementById('deleteAll');
const productItemsContainer = document.getElementById('product-items');
const productForm = document.getElementById('productForm');

let products = JSON.parse(localStorage.getItem('products')) || [];

function displayProducts() {
    productItemsContainer.innerHTML = '';
    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('item');
        productDiv.innerHTML =
            `<img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <button class="delete-item" data-index="${index}">Delete</button>`;
        productItemsContainer.appendChild(productDiv);
    });

    document.querySelectorAll('.delete-item').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            deleteProduct(index);
        });
    });
}

function addProduct(name, description, imageUrl) {
    const newProduct = {
        name,
        description,
        imageUrl
    };
    products.push(newProduct);

    localStorage.setItem('products', JSON.stringify(products));
    displayProducts();
}

function deleteProduct(index) {
    products.splice(index, 1);

    localStorage.setItem('products', JSON.stringify(products));
    displayProducts();
}

function deleteAllProducts() {
    products.length = 0;

    localStorage.setItem('products', JSON.stringify(products));
    displayProducts();
}

productForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productImage = document.getElementById('productImage').value;

    addProduct(productName, productDescription, productImage);

    productForm.reset();
});

deleteAllButton.addEventListener('click', deleteAllProducts);

displayProducts();
 
