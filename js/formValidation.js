import { showAlertError, showAlertSuccess } from './animations.js'

const btnSend = document.querySelector('#btnSend')
const btnSendFriend = document.querySelector('#btnSendFriend')

// Waits for a click event on "send" button. Then validates the form fields, calling an error or success alert
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


// Waits for a click event on "sendfriend" button. Then validates the form fields, calling an error or success alert
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
    window.open(`email.html?${name.value}:${email.value}`, '_blank');
})

// Checks if the email is valid.
function isEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}