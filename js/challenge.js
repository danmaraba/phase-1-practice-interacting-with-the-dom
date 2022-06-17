const minus=document.getElementById("minus")
const plus=document.getElementById("plus")
const heart=document.getElementById("heart")
const pause=document.getElementById("pause")
const counter=document.getElementById("counter")
const likes=document.querySelector("ul.likes")
const commentForm=document.querySelector("#comment-form")
const comment=document.querySelector("#list")

let interval=setInterval(increaseCounter, 1000)
let numberTracker={}
let paused=false



minus.addEventListener('click',decreaseCounter)

plus.addEventListener('click',increaseCounter)

heart.addEventListener('click',toHeart)

pause.addEventListener('click',toStop)

commentForm.addEventListener('submit',hitSubmitButton)

function increaseCounter(e){counter.innerText=parseInt(counter.innerText) +1

}

function decreaseCounter(e){
    counter.innerText=parseInt(counter.innerText) -1
    
}

function toHeart(){
    let second=counter.innerText
    numberTracker[second]=numberTracker[second] || 0
    numberTracker[second] +=1
    createLikes()
    
}

function createLikes() {
    likes.innerHTML=""
    for(let key in numberTracker){
        const li=document.createElement("li")
        li.innerText=`${key} has been liked ${numberTracker}`
        likes.append(li)
    }
    
}

function hitSubmitButton(e){
    e.preventDefault()
    const comment=e.target.querySelector("input").value
    const li=document.createElement("li")
    li.innerText=comment
    comment.append(li)
    e.target.reset()
    
}

function toStop(){
    paused=!paused
    if(paused){
        clearInterval(interval)
        pause.innerText="resume"
    } else{
        interval=setInterval(increaseCounter,1000)
        pause.innerText="pause"
    }
    
}

