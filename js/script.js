
let card = document.querySelector('.animals_slider_card')
let crdd = document.querySelector('.crdd')
let container = document.querySelector('.slider_container')
let count = 0;
let lefrBtn = document.querySelector('.lefrBtn')
let rightBtn = document.querySelector('.rightBtn')

function slide() {
    for (let i = 0; i < container.children.length; i++) {
        container.children[i].style.transform = `translateX(${-400 * count}px)`
    }
}
setInterval(() => {
    // console.log('salam');
    crdd.classList.toggle('active')
    card.classList.toggle('active')

    if (count < container.children.length - 3) {
        count++;
        slide();
    } else {
        count = 0;
        slide();
    }


}, 4000);
slide()
lefrBtn.addEventListener('click', () => {
    if (count > 0) {
        count--
        slide();

    } else {
        count = 0
        count++

    }
    slide()

})
slide()
rightBtn.addEventListener('click', () => {

    if (count > 0) {
        count--
        slide();

    } else {
        count = 0
        count++

    }
    slide()
})





let aboutContainer = document.querySelector('.about_container')

let countt = 0;
function slide2() {
    for (let i = 0; i < aboutContainer.children.length; i++) {
        aboutContainer.children[i].style.transform = `translateX(${-290 * countt}px)`
    }
}
setInterval(() => {
    if (countt < aboutContainer.children.length - 4) {
        countt++;
        slide2();
    } else {
        countt = 0;
        slide2();
    }
}, 3000);

let footerSlider = document.querySelector('.footer_slider_container ')


let counttt = 0;
function slide3() {
    for (let i = 0; i < footerSlider.children.length; i++) {
        footerSlider.children[i].style.transform = `translateX(${-235 * counttt}px)`
    }
}
setInterval(() => {
    if (counttt < footerSlider.children.length - 4) {
        counttt++;
        slide3();
    } else {
        counttt = 0;
        slide3();
    }
}, 4000);

let hrt = document.querySelector('.hrt');
///////////
function func() {
    hrt.classList.toggle('clrRd')
}

let rltv = document.querySelector('.rltv');
rltv.addEventListener('click', () => {
    let innerUl = document.querySelector('.inner_ul').classList.toggle('show');
    // console.log('salam');
})

let headerUl = document.querySelector('.header_ul')

let navStart=document.querySelector('#navStart')
navStart.addEventListener('click',()=>{
    console.log('salam')
headerUl.classList.toggle('header_ul_active')
})


// ///////////////////
let loader = document.querySelector('.loader')
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.style.display = 'none'
    }, 1000);
})
