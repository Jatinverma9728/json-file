// Get the current page's category (for example, 'electronics')
const category = window.location.pathname.split("/").pop().split(".")[0]; // Extract category from URL

// Fetch the relevant JSON file for the category
fetch(`json/${category}.json`)
  .then((response) => response.json())
  .then((products) => {
    const container = document.getElementById("product-container");
    products.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">$${product.price}</p>
        <p class="discount">Discount: ${product.discount}%</p>
      `;
      container.appendChild(card);
    });
  })
  .catch((error) => console.error("Error loading products:", error));
const card = document.createElement("div");
card.classList.add("product-card");
card.innerHTML = `
  <img src="${product.image}" alt="${product.name}" />
  <h3>${product.name}</h3>
  <p>${product.description}</p>
  <p class="price">$${product.price}</p>
  <p class="discount">Discount: ${product.discount}%</p>
  <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
`;

container.appendChild(card);

// Add event listener for "Add to Cart"
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", function () {
    const productId = this.getAttribute("data-id");
    // Handle adding product to cart
    console.log("Product added to cart: ", productId);
  });
});
