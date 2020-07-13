let time = document.querySelector("#counter") 

const plusBtn = document.getElementById("+")
const minusBtn = document.getElementById("-")
const heartBtn = document.getElementById("<3")
const pauseBtn = document.getElementById("pause")

const form =  document.querySelector('form')
const input = document.querySelector('input')
const commentContainer = document.getElementById("list")
const likeContainer = document.querySelector('ul')

let paused = false
 
var counter = setInterval(() => {
    if (!paused){
        time 
        time.innerText = Number(time.innerText) + 1
    }
}, 1000)


plusBtn.addEventListener("click", () => {
    time.innerText = Number(time.innerText) + 1
})

minusBtn.addEventListener("click", () => {
    time.innerText = Number(time.innerText) - 1 
})

heartBtn.addEventListener("click", () => {
    if (document.getElementById(time.innerText)){
        const likedTime = document.getElementById(time.innerText)
        const span = likedTime.querySelector("span") 
        span.innerText = Number(span.innerText) + 1
    }
    else {
        const li = document.createElement('li')
        li.id = Number(time.innerText)
        li.innerHTML = `${li.id} has been liked <span> ${1} </span> times`
        likeContainer.append(li)
    }  
})

pauseBtn.addEventListener("click", () => {
    paused = !paused
    if (!paused){
        pauseBtn.innerText = 'pause'
    }
    else {
        pauseBtn.innerText = 'resume'
    }
})

if (input !== null && input !== '' && input !== undefined){
    form.addEventListener("submit", () => {
        event.preventDefault()
        const pTag = document.createElement("p")
        pTag.innerText = input.value
        commentContainer.append(pTag)
        form.reset()
    })
}