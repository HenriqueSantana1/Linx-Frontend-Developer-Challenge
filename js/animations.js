const abstract = document.querySelector('.abstract-text')
const btnCollapse = document.querySelector('.iconCollapseAbstract')
const btnCloseAlertError = document.querySelector('.btnCloseError')
const btnCloseAlertSuccess = document.querySelector('.btnCloseSuccess')
const alertError = document.querySelector('.error')
const alertSuccess = document.querySelector('.success')

// Waits for a click event on '.btnCloseError'. Then changes the div's class to hide. After 1.3s (animation's time) changes the display to none.
btnCloseAlertError.addEventListener("click", e => {
    alertError.classList.remove('show')
    alertError.classList.add('hide')
    setTimeout(() => {
        alertError.classList.remove('none')
    },1300)
})

// Waits for a click event on '.btnCloseSuccess'. Then changes the div's class to hide. After 1.3s (animation's time) changes the display to none.
btnCloseAlertSuccess.addEventListener("click", e => {
    alertSuccess.classList.remove('show')
    alertSuccess.classList.add('hide')
    setTimeout(() => {
        alertSuccess.classList.remove('none')
    },1300)
})

// Shows an error alert with the msg param
export function showAlertError(msg) {
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

// Shows an success alert with the msg param
export function showAlertSuccess(msg) {
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


let isVisible = true;

// Waits for a click event on '.iconCollapseAbstract'. Then shows (if isn't visible) or hides (if is visible) the paragraph and rotates the icon
btnCollapse.addEventListener("click", e => {
    e.preventDefault()
    if (isVisible) {
        abstract.classList.add('invisible')
        btnCollapse.classList.add('isCollapsed')
        setTimeout(() => {
            abstract.classList.add('none')
        }, 750)
        isVisible = false
    }
    else {
        abstract.classList.remove('none')
        setTimeout(() => {
            abstract.classList.remove('invisible')
        }, 1)
        btnCollapse.classList.remove('isCollapsed')

        isVisible = true;
    }
})