let gridContainer = document.querySelector('.grid_container');

let hesab = document.querySelector('.hesab')
let t = 0
hesab.innerHTML = t
let basketList = document.querySelector('.basketList')
let score = document.querySelector('.score')

let animaleShop = [
    {
        id: 1,
        name: 'Cat',
        img: '..//axces/images/cardssss/cat/4.jpg',
        price: 50,
        flt: 'Cat'

    },
    {
        id: 2,
        name: 'Cat',
        img: '..//axces/images/cardssss/cat/360_F_77518136_F88I0v3R2mZsKEgxxXMc4iqXlOjK8OLE.jpg',
        price: 59,
        flt: 'Cat'

    },
    {
        id: 3,
        name: 'Cat',
        img: '..//axces/images/cardssss/cat/3683.webp',
        price: 48,
        flt: 'Cat'

    }, {
        id: 4,
        name: 'Cat',
        img: '..//axces/images/cardssss/cat/Kitten-Blog-683x1024.jpg',
        price: 70,
        flt: 'Cat'

    },
    {
        id: 5,
        name: 'Dog',
        img: '..//axces/images/cardssss/dog/1.jpg',
        price: 70,
        flt: 'Dog'

    },
    {
        id: 6,
        name: 'Dog',
        img: '..//axces/images/cardssss/dog/2.jpg',
        price: 70,
        flt: 'Dog'

    },
    {
        id: 7,
        name: 'Dog',
        img: '..//axces/images/cardssss/dog/3.jpg',
        price: 70,
        flt: 'Dog'

    },
    {
        id: 8,
        name: 'Dog',
        img: '..//axces/images/cardssss/dog/4.jpg',
        price: 70,
        flt: 'Dog'

    },
    {
        id: 9,
        name: 'Rabbit',
        img: '..//axces/images/cardssss/rabbit/1.jpg',
        price: 70,
        flt: 'Rabbit'

    },
    {
        id: 10,
        name: 'Rabbit',
        img: '..//axces/images/cardssss/rabbit/2.jpg',
        price: 70,
        flt: 'Rabbit'

    },

    {
        id: 11,
        name: 'Rabbit',
        img: '..//axces/images/cardssss/rabbit/4.jpg',
        price: 70,
        flt: 'Rabbit'

    },
    {
        id: 12,
        name: 'Rabbit',
        img: '..//axces/images/cardssss/rabbit/46eb1f8e56520d347caf9a4c03eb1c5b--lop-bunnies-bunny-bunny.jpg',
        price: 70,
        flt: 'Rabbit'

    },
    {
        id: 13,
        name: 'Accessor',
        img: '..//axces/images/cardssss/aksesuar/423f1d154e290cd3575f7f66397583d5.jpg',
        price: 70,
        flt: 'Accessor'

    },
    {
        id: 14,
        name: 'Accessor',
        img: '..//axces/images/cardssss/aksesuar/1200x1045.jpg',
        price: 70,
        flt: 'Accessor'

    },
    {
        id: 15,
        name: 'Accessor',
        img: '..//axces/images/cardssss/aksesuar/kong-kopek-extreme-kaucuk-oyuncak-kemik-kopek-kaucuk-ve-sert-plastik-oyuncaklar-kong-912820-49-B.jpg',
        price: 70,
        flt: 'Accessor'

    },
    {
        id: 16,
        name: 'Accessor',
        img: '..//axces/images/cardssss/aksesuar/10489154109490.jpg',
        price: 70,
        flt: 'Accessor'

    },


]
let basketListContainer = document.querySelector('.basketList_container')

function lets() {
    basketListContainer.classList.toggle('test');
}
let scr = 'Score:'
let man = 'Azn'
sebet = []
animaleShop.forEach(data => {
    gridContainer.innerHTML += `
    <div  data-name="${data.flt}" class="grid_card">
    <img src="${data.img}" alt="">
    <div>
        <div class="forr">
            <p>${data.name}</p>
            <p>${data.price}M</p>
        </div>
        <button onclick="goSebet(event,${data.id})" >Indi al<svg width="21" height="17" viewBox="0 0 21 17" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.47248 0H3.8341C3.85642 0 3.87538 0.0102163 3.89708 0.012459C3.94237 0.016994 3.9847 0.0243697 4.02715 0.0382241C4.06267 0.0497361 4.09474 0.0639393 4.12712 0.0811826C4.16438 0.101067 4.19797 0.122646 4.23045 0.149508C4.26034 0.174126 4.2857 0.20034 4.3104 0.229893C4.33587 0.260342 4.35762 0.29134 4.37694 0.326624C4.39691 0.362855 4.41094 0.400032 4.42319 0.4402C4.42985 0.461978 4.44423 0.479471 4.4485 0.502345L4.80617 2.41898L20.0902 3.29475C20.1488 3.29076 20.2004 3.29913 20.2659 3.30511C20.6054 3.33541 20.8575 3.62725 20.8323 3.96055C20.8302 3.98567 20.827 4.00999 20.8221 4.03391L19.7572 9.72875C19.5136 10.6118 18.7634 11.5033 17.6351 11.5033H6.50156L6.73993 12.7807H16.1082C17.2943 12.7807 18.2596 13.7272 18.2596 14.8902C18.2596 16.0535 17.2943 17 16.1082 17C14.9221 17 13.9568 16.0535 13.9568 14.8902C13.9568 14.5732 14.0336 14.2754 14.1619 14.0055H8.40919C8.53748 14.2754 8.61428 14.5732 8.61428 14.8902C8.61428 16.0535 7.64897 17 6.46288 17C5.27678 17 4.31147 16.0535 4.31147 14.8902C4.31147 14.0632 4.80398 13.3531 5.51241 13.0075L3.31348 1.22477H1.47248C1.12767 1.22477 0.847916 0.950469 0.847916 0.612383C0.847916 0.274296 1.12767 0 1.47248 0ZM5.82601 7.88338L8.47268 7.92415L8.32853 6.4202L5.53762 6.33817L5.82601 7.88338ZM19.0483 6.73531L16.4035 6.65757L16.2305 8.04355L18.7966 8.08307L19.0483 6.73531ZM15.568 6.633L12.6609 6.54758V7.98858L15.3934 8.0307L15.568 6.633ZM12.6609 5.73032L15.6696 5.81878L15.8619 4.27935L12.6609 4.09586V5.73032ZM11.8282 4.04812L8.92168 3.88146L9.0888 5.62532L11.8282 5.70585V4.04812ZM12.6609 8.80529V10.2785H15.1128L15.2917 8.84581L12.6609 8.80529ZM11.8282 8.79249L9.38873 8.75496L9.53476 10.2785H11.8282V8.79249ZM11.8282 7.97578V6.52311L9.16733 6.44487L9.31036 7.937L11.8282 7.97578ZM5.38428 5.51643L8.25 5.60065L8.08065 3.83327L5.03759 3.6588L5.38428 5.51643ZM16.6945 4.3271L16.5052 5.8433L19.2001 5.92254C19.3136 5.31763 19.404 4.84753 19.4811 4.48682L16.6945 4.3271ZM18.5398 9.45884L18.6446 8.89744L16.1286 8.85872L15.9514 10.2785H17.6351C18.1702 10.2785 18.4682 9.71001 18.5398 9.45884ZM8.6983 10.2785L8.55105 8.74205L5.97885 8.70243L6.27299 10.2785H8.6983ZM15.2059 14.8902C15.2059 15.3781 15.6105 15.7752 16.1082 15.7752C16.6059 15.7752 17.0105 15.3781 17.0105 14.8902C17.0105 14.4022 16.6059 14.0055 16.1082 14.0055C15.6105 14.0055 15.2059 14.4022 15.2059 14.8902ZM6.46288 15.7752C6.96057 15.7752 7.36516 15.3781 7.36516 14.8902C7.36516 14.4022 6.96057 14.0055 6.46288 14.0055C5.96518 14.0055 5.56059 14.4022 5.56059 14.8902C5.56059 15.3781 5.96518 15.7752 6.46288 15.7752Z"
                    fill="#1D1D1B" />
            </svg></button>
    </div>

</div>
    
    `
})


function showAnimals(anm) {
    let arr4 = []
    let arr5 = []
    basketList.innerHTML = ''
    anm.forEach(data => {
        basketList.innerHTML += `
        <div class=basket_card>
        <img src="${data.img}"alt="${data.name}">
     <div class="">
         <p>${data.name}</p>
         <p> Say ${data.count}</p>
         <p Qiyməti>${data.count * data.price} Azn</p>
     </div>
     <div class="price_count_container" >
       <button  name='artir' onclick="change(event,${data.id})">+</button>
       <button  name='azalt' onclick="change(event,${data.id})">-</button>
         </div>
             </div>
        
        `
        arr4.push(data.count)
        arr5.push(data.count * data.price)
    })

    u = 0
    for (let i = 0; i < arr4.length; i++) {
        u = u + arr4[i]
        console.log(u);
    }
    hesab.innerHTML = u

    e = 0
    for (let i = 0; i < arr5.length; i++) {
        e = e + arr5[i]
        console.log(e);
    }
    score.innerHTML = (scr + ' ' + e + man)
}

function goSebet(e, id) {
    let checkSebet = sebet.find(data => data.id === +id)
    if (checkSebet) {
        checkSebet.count = checkSebet.count + 1
    } else {
        let dowSebet = animaleShop.find(data => data.id === +id)
        dowSebet.count = 1
        sebet.push(dowSebet)
    }
    showAnimals(sebet)

}

function change(e, id) {
    let sebYoxla = sebet.find(data => data.id === +id)
    if (e.target.name === 'artir') {
        sebYoxla.count += 1
    } else {
        sebYoxla.count -= 1
    } if (sebYoxla.count === 0) {
        let indx = sebet.findIndex(data => data.id === +id)
        sebet.splice(indx, 1)
    }
    showAnimals(sebet)
}








//// filterasiya Start


let item = document.querySelectorAll('.item')
let trendsProducts = document.querySelector('.trends_products')
let gridCard = document.querySelectorAll('.grid_card')


for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click', () => {
        trendsProducts.querySelector('.active2').classList.remove('active2')
        item[i].classList.add('active2')
        let filterName = item[i].getAttribute('data-name')
        for (let i = 0; i < gridCard.length; i++) {
            let filterCard = gridCard[i].getAttribute('data-name')

            if (filterName === filterCard || filterName === "hamsi") {
                gridCard[i].classList.add('goster')
                gridCard[i].classList.remove('gizle')
            } else {
                gridCard[i].classList.add('gizle')
                gridCard[i].classList.remove('goster')
            }
        }

    })
}
//// filterasiya End


let headInnerContainer = document.querySelector('.head_inner_container')
let llll = document.querySelector('.llll')
// function nvv (e){
//     headInnerContainer.classList.toggle('showw')
// }

// llll.addEventListener('click', () => {
//     headInnerContainer.classList.toggle('.showw')

// })
// let headerUl=document.querySelector('.header_ul_active')



let loader = document.querySelector('.loader')
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.style.display = 'none'
    }, 1000);
})