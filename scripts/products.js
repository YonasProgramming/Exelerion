const modal = document.querySelector("div.modal");
const modalCloseBtn = modal.querySelector("div.closeBtn");

modalCloseBtn.onclick = closeModal;

const products = document.querySelectorAll("div.product");

products.forEach((product)=>{
    let btn = product.querySelector("div.footer div.moreDetails");
    let text = product.querySelector("div.descriptionText").innerHTML;
    let imgs = product.querySelectorAll("div.descriptionImgs img");
    console.log(imgs);

    btn.onclick = function(){
        // modal.style.display = "block";
        modal.style.opacity = "1";
        modal.style.pointerEvents = "all";
        modal.classList.add("visible");
        createBlur();
        const modalText = modal.querySelector("div.content div.text");
        modalText.innerHTML = text;
        const modalImgs = modal.querySelector("div.content div.images");
        imgs.forEach((img)=>{
            let imgCopy = document.createElement("img");
            imgCopy.src = img.src;
            modalImgs.appendChild(imgCopy);
        });
    }
});

function createBlur(){
    const container = document.querySelector("div.contentWrapper");
    let blur = document.createElement("div");
    blur.classList.add("blur");
    blur.style.width = "100%";
    blur.style.height = "100%";
    blur.style.backdropFilter = "blur(8px)";
    blur.style.position = "absolute";
    blur.style.top = "0";
    blur.style.left = "0";
    blur.style.zIndex = "3";

    blur.onclick = closeModal;

    container.appendChild(blur);
}

function removeBlur(){
    const container = document.querySelector("div.contentWrapper");
    container.removeChild(document.querySelector("div.blur"));
}

function closeModal(){
    modal.style.opacity = "0";
    modal.style.pointerEvents = "none";
    removeBlur();
    setTimeout(() => {
        let modalImgContainer = modal.querySelector("div.content div.images");
        let modalImgs = modal.querySelectorAll("div.content div.images img");
        modalImgs.forEach((img)=>{
            modalImgContainer.removeChild(img);
        });
    }, 500);
}