const closeBtn = document.querySelector("div.closebtn");
const links = document.querySelector("header div.links");

closeBtn.onclick = function(){
    if (links.style.display != "none"){
        links.style.display = "none";
        closeBtn.innerHTML = `<i class="bi bi-list"></i>`;
    } else {
        links.style.display = "flex";
        closeBtn.innerHTML = `<i class="bi bi-x-lg"></i>`;
    }
}

window.addEventListener("DOMContentLoaded",()=>{
    if (window.innerWidth <= 550){
        links.style.display = "none";
        closeBtn.innerHTML = `<i class="bi bi-list"></i>`;
    }
})

window.addEventListener("resize",()=>{
    if (window.innerWidth > 550){
        links.style.display = "flex";
        closeBtn.innerHTML = `<i class="bi bi-x-lg"></i>`;
    } else {
        links.style.display = "none";
        closeBtn.innerHTML = `<i class="bi bi-list"></i>`;
    }
});