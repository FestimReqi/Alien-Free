








// button


const burger = document.querySelector(".buger")
const menu = document.querySelector(".menu")

burger.addEventListener("click",()=>{
    burger.classList.toggle("active");
    menu.classList.toggle("active");
})