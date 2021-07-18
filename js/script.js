const abstract = document.querySelector('.abstract-text')
const btnCollapse = document.querySelector('.iconCollapseAbstract')
const productsCards = document.querySelector('.products-cards')
const btnMoreProducts = document.querySelector(".btnProducts")
const btnSend = document.querySelector('#btnSend')
const btnSendFriend = document.querySelector('#btnSendFriend')
const btnCloseAlertError = document.querySelector('.btnCloseError')
const btnCloseAlertSuccess = document.querySelector('.btnCloseSuccess')
const alertError = document.querySelector('.error')
const alertSuccess = document.querySelector('.success')

let url = 'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1'
let isVisible = true;

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
        showAlertError('Erro: Informe seu nome')
        return false;
    }
    else if (!email.value) {
        showAlertError('Erro: Informe seu e-mail')
        return false;
    }
    else if (!isEmail(email.value)) {
        showAlertError('Erro: E-mail inválido')
        return false;
    }
    else if (!cpf.value) {
        showAlertError('Erro: Informe seu CPF')
        return false;
    }
    else if (cpf.value.length < 11) {
        showAlertError('Erro: CPF inválido')
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

    showAlertSuccess('Obrigado pela ajuda!') 
    console.log('Nome: '+name.value+'\nE-mail: '+email.value+'\nCPF: '+cpf.value+'\nGênero: '+gen)
})

btnSendFriend.addEventListener("click", e => {
    e.preventDefault()
    let name = document.querySelector('#fname')
    let email = document.querySelector('#femail')

    if (!name.value) {
        showAlertError('Erro: Informe o nome')
        return false;
    }
    else if (!email.value) {
        showAlertError('Erro: Informe o e-mail')
        return false;
    }
    else if (!isEmail(email.value)) {
        showAlertError('Erro: E-mail inválido')
        return false;
    }

    showAlertSuccess('E-mail enviado!')
    return sendEmail(name.value, email.value)
})

function isEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function sendEmail(name, email) {
    window.open(`email.html?${name}:${email}`, '_blank');
}

getProducts()

btnCollapse.addEventListener("click", e => {
    e.preventDefault()
    if (isVisible) {
        abstract.classList.add('hide')
        btnCollapse.classList.add('isCollapsed')
        setTimeout(() => {
            abstract.classList.add('none')
        }, 750)
        isVisible = false
    }
    else {
        abstract.classList.remove('none')
        setTimeout(() => {
            abstract.classList.remove('hide')
        }, 1)
        btnCollapse.classList.remove('isCollapsed')

        isVisible = true;
    }
})

btnCloseAlertError.addEventListener("click", e => {
    alertError.classList.remove('show')
    alertError.classList.add('hide')
    setTimeout(() => {
        alertError.classList.remove('none')
    },1300)
})

btnCloseAlertSuccess.addEventListener("click", e => {
    alertSuccess.classList.remove('show')
    alertSuccess.classList.add('hide')
    setTimeout(() => {
        alertSuccess.classList.remove('none')
    },1300)
})

function showAlertError(msg) {
    document.querySelector('#msgE').innerText = msg
    alertError.classList.add('show')
    alertError.classList.remove('none')
    alertError.classList.remove('hide')

    setTimeout(() => {
        alertError.classList.remove('show')
        alertError.classList.add('hide')
        setTimeout(() => {
            alertError.classList.remove('none')
        },1300)
    }, 4000);
}

function showAlertSuccess(msg) {
    document.querySelector('#msgS').innerText = msg
    alertSuccess.classList.add('show')
    alertSuccess.classList.remove('hide')
    alertSuccess.classList.remove('none')

    setTimeout(() => {
        alertSuccess.classList.remove('show')
        alertSuccess.classList.add('hide')
        setTimeout(() => {
            alertSuccess.classList.remove('none')
        },1300)
    }, 4000);
}











