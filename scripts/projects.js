const projects = document.querySelectorAll("div.project");
projects.forEach((project)=>{
    let btn = project.querySelector("div.moreDetails");
    let data = project.querySelector("div.projectDetails");
    data.style.display = "none";
    btn.onclick = function(){
        closeOtherDetails(data);
        resetProjectSizing(projects);
        resetBtns(projects,project);
        assignImgHover(project);
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

function assignImgHover(project){
    let imgs = project.querySelectorAll("div.images img");

    if (imgs.length == 3){
        imgs[0].classList.add("hoverLeft");
        imgs[1].classList.add("hoverCenter");
        imgs[2].classList.add("hoverRight");
    }

    if (imgs.length == 2){
        imgs[0].classList.add("hoverCenter");
        imgs[1].classList.add("hoverCenter");
    }

    if (imgs.length == 1){
        imgs[0].classList.add("hoverCenter");
    }
}

window.addEventListener("resize",resetProjectSizing);