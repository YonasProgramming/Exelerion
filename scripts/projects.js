const projects = document.querySelectorAll("div.project");
const modal = document.querySelector("div.modal");
projects.forEach((project)=>{
    let btn = project.querySelector("div.moreDetails");
    let data = project.querySelector("div.projectDetails");
    data.style.display = "none";
    btn.onclick = function(){
        closeOtherDetails(data);
        resetProjectSizing(projects);
        resetBtns(projects,project);
        enableModalForImgs(project);
        data.style.display = data.style.display == "none" ? "block" : "none";
        btn.innerHTML = btn.innerHTML == "Close Details" ? `More Details<i class="bi bi-plus-lg"></i>` : "Close Details";

        if (project.style.height != "fit-content"){
            project.style.height = "fit-content";
        } else {
            if (window.innerWidth <= 550){
                //mobile devices fix
                project.style.height = "fit-content"
            } else {
                project.style.height = "250px";
            }
        }
    }
});

function closeOtherDetails(targetToKeepOpen){
    const dropdowns = document.querySelectorAll("div.project div.projectDetails");
    dropdowns.forEach((dropdown)=>{
        if (dropdown != targetToKeepOpen){
            dropdown.style.display = "none";
        }
    });
}

function resetProjectSizing(projects){
    projects.forEach((project)=>{
        if (window.innerWidth <= 550){
            project.style.height = "fit-content";
        } else {
            project.style.height = "250px";
        }
    });
}

function resetBtns(projects, targetToIgnore){
    projects.forEach((project)=>{
        if (project != targetToIgnore){
            let btn = project.querySelector("div.moreDetails");
            btn.innerHTML = `More Details<i class="bi bi-plus-lg"></i>`;
        }
    });
}

function enableModalForImgs(project){
    let imgs = project.querySelectorAll("div.images img");

    imgs.forEach((img)=>{
        img.onclick = function(){
            displayModal(img);
        }
        img.touchstart = function(){
            displayModal(img);
        }
    });
}

function displayModal(img){
    let src = img.src;

    let modalImg = modal.querySelector("div.img img");
    modalImg.src = src;

    modal.style.display = "block"

    let modalClose = modal.querySelector("i");

    let modalTitle = modal.querySelector("div.header h2");
    let projectTitle = project.querySelector("div.wrapper div.description div.text h3").innerHTML;
    modalTitle.innerHTML = projectTitle;

    modalClose.onclick = function(){
        modal.style.display = "none";
    }
}

window.addEventListener("resize",resetProjectSizing);