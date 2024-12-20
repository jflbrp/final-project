console.log(products)
let filteredProducts = [...products]
console.log(filteredProducts)

const productsContainer = document.querySelector(".search-and-logo")
const searchForm = document.querySelector(".input-form")
const searchInput = document.querySelector(".search-input")

searchForm.addEventListener("keyup", () => {
    
    let searchTerm = searchInput.value.toLowerCase();
    console.log(searchTerm)
    filteredProducts = products.filter(product => {
        return product.title.includes(searchTerm) || product.company.includes(searchTerm)
    })
    displayProducts()
})

function displayProducts() {
    productsContainer.innerHTML = filteredProducts.map(product => {
       return  `<article class="Items">
                    <img src="${product.image}" alt="Placeholder" class="image"/>
                    <footer class="information">
                        <p class="company">${product.company}</p>
                        <p class="product-name">${product.title}</p>
                        <p class="product-price">$${product.price}</p>
                    </footer>
                </article>`
    }).join("")
}
function returnHome() {
    console.log("click")
}

displayProducts()