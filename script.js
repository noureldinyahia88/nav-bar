let openBtn = document.querySelector("nav")
let closeBtn = document.querySelector(".colse")
let toggle = document.querySelector('.toggle')
toggle.addEventListener("click",()=>{
    openBtn.classList.add("open")
})
closeBtn.addEventListener("click",()=>{
    openBtn.classList.remove("open")
})
document.onkeyup = function(e){
    if(e.key==="Escape"){
        openBtn.classList.remove("open")
    }
}