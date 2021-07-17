let url = 'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1'
const productsCards = document.querySelector('.products-cards-email')

function listProducts(product) {
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
}

function getProducts() {
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        listProducts(data.products[0])
        listProducts(data.products[1])
    })
}

function getName() {
    const queryString = window.location.search
    let [friendsName, email] = queryString.replace('?','').split(':')
    document.querySelector('#name').innerText += ' '+friendsName
    console.log('E-mail enviado para '+email)
}

getName()
getProducts()