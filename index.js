const addCom = document.querySelector('#addCom')
const newCom = document.createElement('li')
const add = document.querySelector('ul')
const like = document.querySelector('#heart')
let likesCount = document.querySelector('.total-likes')
let plus = Number(likesCount.innerHTML)
let height = document.querySelector('.header')
let search = document.querySelector('.search')
let search2 = document.querySelector('#search')
let instagram = document.querySelector('.instagram')
let scrollUp = document.querySelector('.page-up')

window.onscroll = function() {scrollFunction()}

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    height.style.height = "50px";
    search.style.height = "0"
    search2.style.height = "0"
    search2.style.border = "0"
    search2.style.padding = "0"
    instagram.style.fontSize = "0"
  } else {
    height.style.height = "75px";
    search.style.height = "28px"
    search2.style.height = "28px"
    search2.style.border = " 1px solid #d4d4d4"
    search2.style.padding = "1px 2px 1px 1px"
    instagram.style.fontSize = "25px"
  }
}

const comment = function(){
    const name = prompt('Iveskite savo vardą:')
    newCom.innerText = `${name} ${addCom.value}`
    add.appendChild(newCom)
    addCom.value = ''
}

addCom.addEventListener('keyup', function(event){
    if(event.keyCode === 13 && addCom.value !== ""){
        comment()

    }
    else if (event.keyCode === 13 && addCom.value == ""){
        alert('Iveskite tekstą :)')
    }
})

like.addEventListener('click', function(){
    if(like.style.color !== 'red'){
        like.style.color = 'red'
        likesCount.innerHTML = (Number(likesCount.innerHTML)) +1
    }
    else{
        like.style.color = 'black'
        likesCount.innerHTML = (Number(likesCount.innerHTML)) -1
    }
})


