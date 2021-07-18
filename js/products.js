const productsCards = document.querySelector('.products-cards')
const btnMoreProducts = document.querySelector(".btnProducts")

let url = 'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1'

// Call the function getProducts to list the first 8 products
getProducts()

// Waits for a click in '.btnProducts' button. Then get the products next page from products API
btnMoreProducts.addEventListener("click", e => {
    e.preventDefault()
    getProducts()
})

// listProducts() -> Function that receives the products from getProducts() and create cards for each product in '.productsCards' div.
function listProducts(products) {
    products.forEach((product) => {
        let card = document.createElement("div")
        card.className = 'product-card'

        let cardInfo = document.createElement("div")
        cardInfo.className = 'card-info'

        let img = document.createElement("img")
        img.setAttribute('src', product.image)

        let title = document.createElement("h1")
        title.innerHTML = product.name

        let desc = document.createElement("p")
        desc.innerHTML = product.description

        let oldPrice = document.createElement("span")
        oldPrice.innerHTML = 'De: R$'+product.oldPrice.toFixed(2).replace('.',',')
        oldPrice.className = 'product-oldPrice'

        let price = document.createElement("span")
        price.innerHTML = 'Por: R$'+product.price.toFixed(2).replace('.',',')
        price.className = 'product-price'

        let installments = document.createElement("span")
        installments.innerHTML = 'ou '+product.installments.count+'x de R$'+product.installments.value.toFixed(2).replace('.',',')
        installments.className = 'installments'

        let btnBuy = document.createElement("button")
        btnBuy.innerHTML = 'Comprar'

        card.appendChild(img)
        cardInfo.appendChild(title)
        cardInfo.appendChild(desc)
        cardInfo.appendChild(oldPrice)
        cardInfo.appendChild(price)
        cardInfo.appendChild(installments)
        cardInfo.appendChild(btnBuy)
        
        card.appendChild(cardInfo)
        productsCards.appendChild(card)
    })
}

// getProducts() -> get products from API and calls listProducts function. url variable receives the next page's url
function getProducts() {
    fetch(url)
    .then((res) => res.json())
    .then(function(data) {
        listProducts(data.products)
        url = 'https://'+data.nextPage
    })
}