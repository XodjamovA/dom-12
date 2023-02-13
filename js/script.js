let btns1 = document.querySelectorAll('button[data-modal]')
let closebtns = document.querySelectorAll('[data-close]')
let modal = document.querySelector('.modal')

btns1.forEach(btn => {
    btn.onclick = () => {
        modal.classList.remove('hide')
        modal.classList.add('show', 'fade')
    }

});
closebtns.forEach(btn => {
    btn.onclick = () => {
        modal.classList.remove('show', 'fade')
        modal.classList.add('hide')
    }

});

let inpNeeds = document.querySelectorAll('.order__input')
let form = document.forms.reg
let allInps = document.querySelectorAll('form input')

let regex = {
    name: /^[a-z ,.'-]+$/g,
    phone: /^998[012345789][0-9]{8}$/g
}

form.onsubmit = (event) => {
    event.preventDefault();
    let errorss = 0

    inpNeeds.forEach(inp => {
        inp.classList.remove('invalid')
        if (inp.value.length < 1) {

            inp.classList.add('invalid')
            errorss++
        }
    })

    if (errorss > 0) {
        console.log('error');
    } else {
        submit(form)
    }

}

let slide = document.querySelectorAll('.offer__slide')
let close = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let text = document.querySelector('#current')
let total = document.querySelector('#total')


let slide_next = 0

close.onclick = () => {
    slide_next--
    shou_slide(slide_next)
}


next.onclick = () => {
    slide_next++
    shou_slide(slide_next)
}


function shou_slide(nc) {
    if (nc >= slide.length) {
        slide_next = 0
    }

    if (nc == -1) {
        slide_next = slide.length - 1
    }
    slide.forEach((slide) => {
        slide.style.display = "none"
        slide.classList.remove('fade')
    })
    slide[slide_next].classList.add('fade')
    slide[slide_next].style.display = "block"

    text.innerHTML = '0' + (slide_next + 1)
}

shou_slide()


let tabcontents = document.querySelectorAll('.tabcontent')
let btns = document.querySelectorAll('.tabheader__item')

showTabs()

function showTabs(n = 0) {
    tabcontents.forEach(element => {
        element.style.display = "none"
        element.classList.remove('fade')
    });
    tabcontents[n].classList.add('fade')
    tabcontents[n].style.display = "block"
}


btns.forEach((btn, index) => {
    btn.onclick = () => {
        btns.forEach(el => el.classList.remove('tabheader__item_active'))

        btn.classList.add('tabheader__item_active')
        showTabs(index)
    }
})

