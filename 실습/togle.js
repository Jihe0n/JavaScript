const btn = document.querySelector(".btn")
const nav = document.querySelector(".nav")
const icon = document.querySelector(".icon")

btn.addEventListener("click", ()=>{
    nav.classList.toggle("state")
    icon.classList.toggle("state")
})
