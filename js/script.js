const abstract = document.getElementsByClassName('abstract-text')
const btnCollapse = document.querySelector('.iconCollapseAbstract')
const productsCards = document.querySelector('.products-cards')
const btnMoreProducts = document.querySelector(".btnProducts")
const btnSend = document.querySelector('#btnSend')
const btnSendFriend = document.querySelector('#btnSendFriend')

let url = 'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1'
let isVisible = true;


btnCollapse.addEventListener("click", e => {
    e.preventDefault()
    if (isVisible) {
        abstract[0].classList = 'abstract-text text-invisible'
        abstract[1].classList = 'abstract-text text-invisible'
        btnCollapse.classList = 'iconCollapseAbstract isCollapsed'
        isVisible = false
    }
    else {
        abstract[0].classList = 'abstract-text'
        abstract[1].classList = 'abstract-text'
        btnCollapse.classList = 'iconCollapseAbstract'
        isVisible = true;
    }

})

btnMoreProducts.addEventListener("click", e => {
    e.preventDefault()
    getProducts()
})

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

function getProducts() {
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        listProducts(data.products)
        url = 'https://'+data.nextPage
    })
}

btnSend.addEventListener("click", e => {
    e.preventDefault()
    let name = document.querySelector('#name')
    let email = document.querySelector('#email')
    let cpf = document.querySelector('#cpf')
    let masc = document.querySelector('#masc')
    let fem = document.querySelector('#fem')
    let gen
    
    if (!name.value) {
        alert('Insira seu nome')
        return false;
    }
    else if (!email.value) {
        alert('Insira seu e-mail')
        return false;
    }
    else if (!isEmail(email.value)) {
        alert('E-mail inválido')
        return false;
    }
    else if (!cpf.value) {
        alert('Insira seu CPF')
        return false;
    }
    else if (cpf.value.length < 11) {
        alert('CPF inválido')
        return false;
    }
    
    if (masc.checked) {
        gen = 'Masculino'
    }
    else if (fem.checked) {
        gen = 'Feminino'
    }
    else {
        gen = 'Outro'
    }

    console.log('Nome: '+name.value+'\nE-mail: '+email.value+'\nCPF: '+cpf.value+'\nGênero: '+gen)
})

btnSendFriend.addEventListener("click", e => {
    e.preventDefault()
    let name = document.querySelector('#fname')
    let email = document.querySelector('#femail')

    if (!name.value) {
        alert('Insira seu nome')
        return false;
    }
    else if (!email.value) {
        alert('Insira seu e-mail')
        return false;
    }
    else if (!isEmail(email.value)) {
        alert('E-mail inválido')
        return false;
    }

    return sendEmail(name.value, email.value)
})

function isEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function sendEmail(name, email) {
    console.log('Nome: '+name+'\nE-mail: '+email)
}

getProducts()

















