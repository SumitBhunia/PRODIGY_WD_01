let flag = 0;//counter for hamburger
//to open hamburger
document.querySelector(".hamburger").addEventListener("click", () => {
    if (flag == 0) {
        document.querySelector(".hamburgercont").style.top = "113px";
        document.querySelector(".hamburgercont").style.opacity = "1";
        document.querySelector(".hamburger").style.transform = "rotate(90deg)";
        document.querySelector(".hamburger").style.transition = "transform 0.4s ease-in-out";
        flag = 1;
    } 
    //to close hamburger
    else {
        document.querySelector(".hamburgercont").style.top = "-80%";
        document.querySelector(".hamburger").style.transform = "rotate(0deg)";
        flag = 0;
    }
});

//hamburger close when clicking link
document.querySelectorAll(".hamburgercont li a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".hamburgercont").style.top = "-80%";
        document.querySelector(".hamburger").style.transform = "rotate(0deg)";
        flag = 0;
    });
})
