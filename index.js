

const box = document.getElementById("box")

box.addEventListener("click", event =>{
    event.target.style.backgroundColor = "tomato"
    event.target.textContent = "ouch 🤕"
    event.target.style.boxShadow = " 10px 10px 10px hsla(14, 82%, 28%, 0.479)"
    
})

box.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor = "yellow"
    event.target.textContent = "Don't Click 😱"
    event.target.style.boxShadow = " 10px 10px 10px hsla(61, 82%, 28%, 0.616)"
    
})

box.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "lightgreen"
    event.target.textContent = "Click Me 😉"
    event.target.style.boxShadow = "10px 10px 10px hsla(120, 82%, 28%, 0.651)"
    
})