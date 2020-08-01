// add rotating ig weatherapi
// make delete btn becoming red on hover

const addCom = document.querySelector('#addCom')
const newCom = document.createElement('li')
const add = document.querySelector('ul')
const like = document.querySelector('#heart')
let likesCount = document.querySelector('.total-likes')
let plus = Number(likesCount.innerHTML)



const comment = function(){
    const name = prompt('Iveskite savo vardą:')
    newCom.innerText = `${name} ${addCom.value}`
    add.appendChild(newCom)
}

addCom.addEventListener('keyup', function(event){
    if(event.keyCode === 13 && addCom.value !== ""){
        comment()

    }else if (event.keyCode === 13 && addCom.value == ""){
        alert('Iveskite tekstą :)')
    }
})

like.addEventListener('click', function(){
    if(like.style.color !== 'red'){
        like.style.color = 'red'
        likesCount.innerHTML = (Number(likesCount.innerHTML)) +1
    }else{
        like.style.color = 'black'
        likesCount.innerHTML = (Number(likesCount.innerHTML)) -1
    }
})


